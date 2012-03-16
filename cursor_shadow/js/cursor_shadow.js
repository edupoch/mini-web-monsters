$(function() {
    
    $("body").append(
    '<div id="cursor_far_shadow"><img src="./img/ZoomInShadow.png"></div>');
    
    $("div.floating_div")
    .css({"z-index": "50",
        "-webkit-box-shadow":"20px 20px 5px #999",
        "overflow":"hidden"
    })
    .html('<div id="cursor_close_shadow"><img src="./img/ZoomInShadow.png"></div>');
       
    cursor_far_shadow = $("#cursor_far_shadow");    
    cursor_far_shadow.css({
       "position": "absolute",
        "z-index": "30",
        "opacity": "0.5",
        "display":"none"
    });
    
    cursor_close_shadow = $("#cursor_close_shadow");    
    cursor_close_shadow.css({
        "z-index": "80",
        "opacity": "1",
        "display":"none"
    });

    $("html").mousemove(function(e){
        cursor_far_shadow.css("margin-left",e.pageX+30);
        cursor_far_shadow.css("margin-top",e.pageY+30);
        cursor_far_shadow.show();
            
        cursor_close_shadow.css("margin-left",e.pageX-490);
        cursor_close_shadow.css("margin-top",e.pageY-190);
        cursor_close_shadow.show();
        
        $("body").css("cursor","url(./img/ZoomIn.png)");
    });
        
});