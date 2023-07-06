/**
 * @author Maximilian Mewes
 *
 *
 */

$(function() {
    let e2 = $('#moveMe').clone().attr('id', 'moveMe2').css('opacity', 0).insertAfter("#moveMe");
    $('#moveMe').css('position', 'absolute');
    $('#topNav').css('position', 'fixed');

    const CONFIG = {
        el: $('#moveMe'),
        // startPosX: $('#moveMe2').offset().left,
        // startPosY: $('#moveMe2').offset().top,
        startPosX: 88,
        startPosY: 12,
        startFontSize: 1,
        endPosX: 25, // px
        endPosY: 70, // px
        endFontSize: 1.25, // rem
        maxScroll: $('.scrollBox').height(), // px
        startImageWidth: 55,
        endImageWidth: 35
    }

    init();

    window.onscroll = function () {
        updateNavBar();
    };

    function init()
    {
        CONFIG.el.css('left', CONFIG.endPosX);
        CONFIG.el.css('top', CONFIG.endPosY);
        $('#moveMe img').css('width', CONFIG.startImageWidth);
        CONFIG.el.css('font-size', CONFIG.endFontSize+'rem');
    }

    function updateNavBar()
    {
        if(CONFIG.maxScroll <= getYPos()) {
            CONFIG.el.css('left', CONFIG.startPosX);
            CONFIG.el.css('top', CONFIG.startPosY);
            CONFIG.el.css('font-size', lerp(CONFIG.endFontSize, CONFIG.startFontSize, p)+'rem');
            $('#moveMe img').css('width', CONFIG.endImageWidth);
            $('#navBrand').css('width', 60);

            $('.update-profileimage').css('transform', 'scale(0)');
            $('.fa-qrcode').css('transform', 'perspective(400px) rotate3d(1, 0, 0, 90deg)');
            return;
        }

        let p = map(1, CONFIG.maxScroll, getYPos());
        CONFIG.el.css('left', lerp(CONFIG.endPosX, CONFIG.startPosX, p));
        CONFIG.el.css('top', lerp(CONFIG.endPosY, CONFIG.startPosY, p));
        CONFIG.el.css('font-size', lerp(CONFIG.endFontSize, CONFIG.startFontSize, p)+'rem');
        $('#moveMe img').css('width', lerp(CONFIG.startImageWidth, CONFIG.endImageWidth, p));
        $('#navBrand').css('width', lerp(75, 60, p));

        $('.update-profileimage').css('transform', 'scale('+ (lerp(1, 0, p) > .35 ? 1 : 0) +')');
        $('.fa-qrcode').css('transform', lerp(1, 0, p) > .75 ? 'perspective(400px)' : 'perspective(400px) rotate3d(1, 0, 0, 90deg)');
    }

    function getYPos(){
        return window.scrollY || window.pageYOffset;
    }

    function lerp(a, b, p) {
        return (1 - p) * a + p * b;
    }

    function map(min, max, x) {
        return ((x - min) * 100 / (max - min)) / 100;
    }

    function toRem(el) {
        return (el.replace('px', '') / 16);
    }

});
