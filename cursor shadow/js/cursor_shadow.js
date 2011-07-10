$(function() {
       
    cursor_far_shadow = $("#cursor_far_shadow");
    cursor_close_shadow = $("#cursor_close_shadow");

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