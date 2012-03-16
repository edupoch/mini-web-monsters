$(function(){
            
    visible_text = $(".visible_text");
            
    $("#black_box")
    .css("overflow", "hidden")
    .html('<div class="inner_text">'+visible_text.html()+"<div>")
    .append("<div>Drag me!</div>")
    .draggable({    
        drag: function() {
            $(".inner_text").css({
                "margin-left":(visible_text.css("left").replace("px", "") - $("#black_box").css("left").replace("px", ""))+"px",
                "margin-top":(visible_text.css("top").replace("px", "") - $("#black_box").css("top").replace("px", ""))+"px"
            });
        }
    });
                    
});  