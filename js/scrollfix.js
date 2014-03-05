$(function(){
    $('#myMenu').css('top', 0);
    $('.menu_primary_link').click(function(){
        $(this).parent().addClass("selected").siblings().removeClass("selected");
        setTimeout(fixed, 100);
    });
    
    function fixed(){
        $('#myMenu').css('position', window.scrollY > 150 ? 'fixed' : 'relative');
    }
    
    $(window).scroll(function(){
        fixed();
    });
});