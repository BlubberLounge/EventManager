/**
 * @author Maximilian Mewes
 *
 *
 */

$(function() {
    $('main').click( (e, i) =>
    {
        $('#burger-menu').hide();
    });

    let e2 = $('#moveMe').clone().attr('id', 'moveMe2').css('opacity', 0).insertAfter("#moveMe");
    $('#moveMe').css('position', 'absolute');

    const CONFIG = {
      el: $('#moveMe'),
      startPosX: $('#moveMe2').offset().left,
      startPosY: $('#moveMe2').offset().top,
      startFontSize: toRem($('#moveMe').css('font-size')),
      endPosX: 25, // px
      endPosY: 64, // px
      endFontSize: 1.2, // rem
      maxScroll: 80 // px
    }

    init();

    window.onscroll = function () {
        if(CONFIG.maxScroll > getYPos()) {
            console.log(getYPos());
            let p = map(1, CONFIG.maxScroll, getYPos());
            CONFIG.el.css('left', lerp(CONFIG.endPosX, CONFIG.startPosX, p));
            CONFIG.el.css('top', lerp(CONFIG.endPosY, CONFIG.startPosY, p));
            //CONFIG.el.css('font-size', lerp(CONFIG.endFontSize, CONFIG.startFontSize, p)+'rem');
            $('#moveMe img').css('width', lerp(45, 30, p));
            $('#topNav').css('padding-bottom', lerp(5, .8, p) + 'rem');
            $('#navBrand').css('width', lerp(75, 60, p));

            $('.update-profileimage').css('transform', 'scale('+ (lerp(1, 0, p) > .35 ? 1 : 0) +')');
            $('.fa-qrcode').css('transform', lerp(1, 0, p) > .75 ? 'perspective(400px)' : 'perspective(400px) rotate3d(1, 0, 0, 90deg)');
        }
    };

    function init() {
        CONFIG.el.css('left', CONFIG.endPosX);
        CONFIG.el.css('top', CONFIG.endPosY);
        $('#moveMe img').css('width', '45');
        $('#topNav').css('padding-bottom', '5rem');
    }

    function getYPos(){
        return document.documentElement.scrollTop || document.body.scrollTop;
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
