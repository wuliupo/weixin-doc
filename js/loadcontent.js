$(function(){
    $('a[href^="#"]').live('click', function(e){
        this.href='#'+this.innerHTML;
        loadContent(this.innerHTML);
    });

    var portals=$(".portal").each(function(){
        var portal = $(this).click(function(){
            portals.removeClass('active');
            $(this).addClass('active');
        });
        var as = portal.find('a').data('portal', portal);
    });
    var navs=portals.find('a');
    var firstHeading=$('#firstHeading');
    var bodyContent=$('#bodyContent');
    var placeHolder=bodyContent.html();
    loadContent(location.hash);
    
    function loadContent(title){
        title=!title || title.length<2 ? '%E9%A6%96%E9%A1%B5' : title.replace('#', '');
        bodyContent.html(placeHolder);
		$("html, body").animate({ scrollTop: 0 }, 120);
        $.get('htm/'+title+'.htm', function(content){
            bodyContent.html(content);
            title=decodeURIComponent(title);
            setNav(title);
            firstHeading.html(title);
        });
    }
    
    function setNav(hash){
        navs.each(function(){
            var a = $(this);
            if (hash == a.html()){
                a.addClass("selected").data('portal').click();
            }
        });
    }
});