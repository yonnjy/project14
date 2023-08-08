$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.__move').each(function () {
            if (sct + $(window).innerHeight() - 400 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

    // const $text = document.querySelector(".header");

    // addEventListener("mousewheel", e => {
    //     $text.innerHTML = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
    //     $text.innerHTML += ` ( ${window.scrollY}Y )`;
    // });

    // $(window).on('scroll', function () {
    //     let sct = $(window).scrollUp();
    //     sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    // });

    $('.to_top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style');
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });
});