$(function() {
    var dur = 1
    
    function getMousePos(event) {
        return [event.clientX, event.clientY]
    }
    // end:functions
    
    // events
    $(document).click(function(e) {
        if ($('.ghost').length <= 0) {
            $('body').prepend('<div class="ghost"></div>')
            innerDivTracking()
        } 
            $(document).click(function() {
                innerDivTracking()
            })
        }
    )
    
    $(document).mousemove(function(e) {
        
            var mousePos = getMousePos(e)
            TweenMax.to($('.ghost'), dur, {left: mousePos[0], top: mousePos[1]})
        
    })  
    // end:events
})