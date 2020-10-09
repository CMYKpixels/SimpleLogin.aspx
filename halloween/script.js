$(function() {
    var dur = 2
    
    function getMousePos(event) {
        return [event.clientX, event.clientY]
    }
    // end:functions
    
    // events
    $(document).click(function(e) {
        if ($('.inner').length <= 0) {
            $('body').prepend('<div class="inner"></div>')
            innerDivTracking()
        } 
            $(document).click(function() {
                innerDivTracking()
            })
        }
    )
    
    $(document).mousemove(function(e) {
        
            var mousePos = getMousePos(e)
            TweenMax.to($('.inner'), dur, {left: mousePos[0], top: mousePos[1]})
        
    })  
    // end:events
})