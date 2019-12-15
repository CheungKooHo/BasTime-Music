$(function () {
    /**
     * 点击hot
     * ajax获取数据
     */
    $('.nav-hot').click(function () {
        $.get({
            url: 'https://cloud-music.leanapp.cn/top/list?idx=1',
            success: function (data) {
                console.log(data);
                // 先删除所有li
                $('.hot-list').empty();

                sessionStorage.clear();
                // 再动态生成li
                for (let i = 0; i < 98; i++) {
                    var li = `
                    <li>
                        <span>01</span>
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
                    </li>`
                    $('.hot-list').append(li);
                    // 载入数据
                    // console.log(i);

                    $('.hot-list li span').each(function (index, span) {
                        var num = index + 1
                        if (num < 10) {
                            $(span).text('0' + num);
                        } else {
                            $(span).text(num + 1);
                        }
                    });
                    $('.hot-list li h3').each(function (index, h3) {
                        $(h3).text(data.playlist.tracks[index].name);
                    });
                    $('.hot-list li p').each(function (index, p) {
                        $(p).text(data.playlist.tracks[index].ar[0].name);
                    });
                    $('.hot-list li a').each(function (index, a) {
                        $(a).attr({ href: 'play?id=' + data.playlist.tracks[index].id });
                    });

                    var picSrc = data.playlist.tracks[i].al.picUrl;
                    var id = data.playlist.tracks[i].id;
                    sessionStorage.setItem(id, picSrc);
                };
            }
        });
    });
});