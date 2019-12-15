$(function () {
    /**
     * 点击hot
     * ajax获取数据
     */
    $('.keywords').blur(function () {
        let keywords = $('.keywords').val();
        // console.log(keywords);
        $.get({
            url: 'https://cloud-music.leanapp.cn/search?keywords=${' + keywords + '}',
            success: function (data) {
                console.log(data);
                $('.sea-list').empty();

                sessionStorage.clear();
                for (let i = 0; i < data.result.songs.length; i++) {
                    var li = `
                    <li>
                        <a href="play?id=1407599316">
                            <div class="song-info">
                                <h3>念念有词</h3>
                                <p>周深 - 念念有词</p>
                            </div>
                            <div class="playsvg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="#AAAAAA">
                                    <path
                                        d="M512 0C229.376 0 0 229.376 0 512S229.376 1024 512 1024c282.616633 0 512-229.376 512-512S794.616633 0 512 0z m0 984.528115c-247.292317 0-472.528115-225.228432-472.528115-472.528115S264.707683 39.471885 512 39.471885s472.528115 225.228432 472.528115 472.528115-225.235799 472.528115-472.528115 472.528115z">
                                    </path>
                                    <path d="M408.524432 311.185496l302.757755 201.838504-302.757755 201.838504z">
                                    </path>
                                    <path
                                        d="M408.524432 725.912863a11.065094 11.065094 0 0 1-11.05036-11.050359V311.185496a11.05036 11.05036 0 0 1 17.179626-9.193899L717.411453 503.822734a11.057727 11.057727 0 0 1 0 18.387798L414.653698 724.056403a11.065094 11.065094 0 0 1-6.129266 1.85646z m11.050359-394.077928v362.37813l271.787281-181.196432-271.787281-181.181698z">
                                    </path>
                                </svg>
                            </div>
                        </a>
                    </li>
                    `;
                    $('.sea-list').append(li);
                    $('.sea-list li h3').each(function (index, h3) {
                        $(h3).text(data.result.songs[index].name);
                    });
                    $('.sea-list li p').each(function (index, p) {
                        $(p).text(data.result.songs[index].artists[0].name);
                    });
                    $('.sea-list li a').each(function (index, a) {
                        $(a).attr({ href: 'play?id=' + data.result.songs[index].id });
                    });
                    var picSrc = data.result.songs[i].artists[0].img1v1Url;
                    var id = data.result.songs[i].id;
                    sessionStorage.setItem(id, picSrc);
                };
            }
        });
    });
});