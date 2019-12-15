$(function () {
    // 点击导航变色，显示当前模块
    //     ·排他思想，其他模块隐藏
    if ($('li.tab').hasClass('checked')) {
        $('li.checked').show();
        $('li.checked').siblings('li').hide();
    };
    $('nav div').click(function () {
        if ($('nav div').hasClass('checked')) {
            $(this).siblings('div').removeClass('checked');
        };
        $(this).addClass('checked');
        if ($(this).hasClass('nav-recom')) {
            $('li.recommend').addClass('checked');
            $('li.recommend').siblings('li').removeClass('checked');
        } else if ($(this).hasClass('nav-hot')) {
            $('li.hot').addClass('checked');
            $('li.hot').siblings('li').removeClass('checked');
        } else {
            $('li.search').addClass('checked');
            $('li.search').siblings('li').removeClass('checked');
        };
        if ($('li.tab').hasClass('checked')) {
            $('li.checked').show();
            $('li.checked').siblings('li').hide();
        };
    });

    // 轮播图
    let w = $('.recommend')[0].offsetWidth;
    var index = 0;
    var timer = setInterval(() => {
        index++;
        let translateX = -index * w;
        $('.carousel')[0].style.transition = 'all .5s';
        $('.carousel')[0].style.transform = 'translateX(' + translateX + 'px)';
    }, 3000);
    $('.carousel')[0].addEventListener('transitionend', function () {
        if (index == 5) {
            index = 0;
            $('.carousel')[0].style.transition = 'none';
            let translateX = -index * w;
            $('.carousel')[0].style.transform = 'translateX(' + translateX + 'px)';
        } else if (index == -1) {
            index = 4;
            $('.carousel')[0].style.transition = 'none';
            let translateX = -index * w;
            $('.carousel')[0].style.transform = 'translateX(' + translateX + 'px)';
        };
    });
    let startX = 0;
    let moveX = 0;
    $('.carousel')[0].addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    $('.carousel')[0].addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;
        let translateX = -index * w + moveX;
        $('.carousel')[0].style.transition = 'none';
        $('.carousel')[0].style.transform = 'translateX(' + translateX + 'px)';
    });
    $('.carousel')[0].addEventListener('touchend', function () {
        if (Math.abs(moveX) > 50) {
            if (moveX > 0) {
                index--;
            } else {
                index++;
            };
            let translateX = -index * w;
            $('.carousel')[0].style.transition = 'all .5s';
            $('.carousel')[0].style.transform = 'translateX(' + translateX + 'px)';
        } else {
            let translateX = -index * w;
            $('.carousel')[0].style.transform = 'translateX(' + translateX + 'px)';
        };
    });





})