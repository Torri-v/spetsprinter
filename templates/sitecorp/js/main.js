/**
 * Created by �������� on 04.03.2017.
 */

/*������ ������ �����*/
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

/*��������� ���� ����*/
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
        event.preventDefault();// ������a�� ��a��a����� �o�� �������a
        $('#overlay').fadeIn(400, // ��a�a�a ��a��o �o�a���a�� ������ �o��o���
            function(){ // �o��� ���o������ ����������� a���a���
                $('#modall_menu')
                    .css('display', 'block') // ����a�� � �o�a���o�o o��a display: none;
            });
    });
    //$(document).ready(function() { // ��� �a��� �o��� �a������ ���a����
    //    $('a#go').click( function(event){ // �o��� ���� �o ������ � id="go"
    //        event.preventDefault(); // ������a�� ��a��a����� �o�� �������a
    //        $('#overlay').fadeIn(400, // ��a�a�a ��a��o �o�a���a�� ������ �o��o���
    //            function(){ // �o��� ���o������ ����������� a���a���
    //                $('#modall_menu')
    //                    .css('display', 'block') // ����a�� � �o�a���o�o o��a display: none;
    //                    .animate({opacity: 1, top: '50%'}, 200); // ��a��o ����a����� ��o��a��o��� o��o�������o �o �����a���� ����
    //            });
    //    });

});

/*��������� �����*/
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

/*��������*/
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
