$(function () {
    $('.input').click(function () {
        window.location.href = './index.html';
    });
    // 获取url
    var url = window.location.href;
    //http://127.0.0.1/%e7%bd%91%e6%98%93%e4%ba%91%e9%9f%b3%e4%b9%90web%e7%89%88/playlist?id=2287380795
    // 截取id--》拼到下面连接上
    var pos = url.indexOf('=');
    var id = url.substring(pos + 1);
    // https://music.163.com/song/media/outer/url?id=64392.mp3 播放地址--》传入audio src
    $("audio").attr({ src: 'https://music.163.com/song/media/outer/url?id=' + id + '.mp3' });
    var pic = sessionStorage.getItem(id);
    $('.songico').attr({ src: pic });
    sessionStorage.clear();

    // 旋转
});
