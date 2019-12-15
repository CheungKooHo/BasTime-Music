$(function () {
    /**
     * 获取nav--是否选中推荐
     * 如果选中
     * ajax获取数据
     */
    if ($('.nav-recom').hasClass('checked')) {
        // 推荐歌单
        $.get({
            url: 'https://cloud-music.leanapp.cn/personalized',
            success: function (data) {
                // console.log(data);
                $('.recom-list li p').each(function (index, p) {
                    $(p).text(data.result[index].name);
                });
                $('.recom-list li img').each(function (index, img) {
                    $(img).attr({ src: data.result[index].picUrl });
                });
                $('.recom-list li a').each(function (index, a) {
                    $(a).attr({ href: 'playlist?id=' + data.result[index].id });
                });
            }
        });
        // 最新音乐
        $.get({
            url: 'https://cloud-music.leanapp.cn/personalized/newsong',
            success: function (data) {
                console.log(data);
                for (let i = 0; i < data.result.length; i++) {
                    // 先动态生成 添加 li
                    var li = $(`
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
                    `);
                    $('.new-list').append(li);
                    // 载入数据
                    $('.new-list li h3').each(function (index, h3) {
                        $(h3).text(data.result[index].name);
                    });
                    $('.new-list li p').each(function (index, p) {
                        $(p).text(data.result[index].song.artists[0].name);
                    });
                    $('.new-list li a').each(function (index, a) {
                        $(a).attr({ href: 'play?id=' + data.result[index].id });
                    });

                    var picSrc = data.result[i].picUrl;
                    var id = data.result[i].id;
                    sessionStorage.setItem(id, picSrc);
                };
            }
        });
    };

    // 点击跳转
    // $('.recom-list li').click(function () {
    //     window.location.href = "./playlist.html";
    // });
    // $('.new-list li').click(function () {
    //     window.location.href = "./play.html";
    // });
});