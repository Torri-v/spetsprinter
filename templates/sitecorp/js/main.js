/**
 * Created by Виктория on 04.03.2017.
 */

/*кнопка вызова формы*/
$(document).ready(function() {
    $('.send-call').fancybox({
        maxWidth: 1200,
        maxHeight: 550,
        fitToView: false,
        width: '400px',
        height: 'auto',
        autoSize: false,
        closeClick: false,
        openEffect: 'fade',
        closeEffect: 'fade',
        background: '#fff'
    });
});

/*Модальное окно меню*/
/*$(document).ready(function() {
    $('.menu_modal ').fancybox({
        maxWidth: 1200,
        maxHeight: 550,
        fitToView: false,
        width: '400px',
        height: 'auto',
        autoSize: false,
        closeClick: false,
        openEffect: 'fade',
        closeEffect: 'fade',
        background: '#fff'
    });
});*/
$(document).ready(function() {
    $( ".media_menu" ).click(function(event) {
        event.preventDefault();// выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modall_menu')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
            });
    });
    //$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    //    $('a#go').click( function(event){ // лoвим клик пo ссылки с id="go"
    //        event.preventDefault(); // выключaем стaндaртную рoль элементa
    //        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
    //            function(){ // пoсле выпoлнения предъидущей aнимaции
    //                $('#modall_menu')
    //                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
    //                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    //            });
    //    });

});

/*Прокрутка вверх*/
jQuery( document ).ready(function() {
    jQuery('#scrollup img').mouseover( function(){
        jQuery( this ).animate({opacity: 0.65},100);
    }).mouseout( function(){
        jQuery( this ).animate({opacity: 1},100);
    }).click( function(){
        window.scroll(0 ,0);
        return false;
    });
    jQuery(window).scroll(function(){
        if ( jQuery(document).scrollTop() > 0 ) {
            jQuery('#scrollup').fadeIn('fast');
        } else {
            jQuery('#scrollup').fadeOut('fast');
        }
    });
});

/*Карусель*/
$(document).ready(function(){
    $('.carysel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        arrows: false
});
});

$(window).resize(function() {
    if(document.documentElement.clientWidth < 768) {
        $('.carysel').slick({
            slidesToShow: 2
        });
    }
});




media_menu
