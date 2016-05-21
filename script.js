$(document).ready(function() {
    $(".playButton").on("click", function() {
        $('.screen').fadeToggle();

        var el = $(this);
        if (el.text() == el.data("text-swap")) {
            el.text(el.data("text-original"));
        } 
        else {
            el.data("text-original", el.text());
            el.text(el.data("text-swap"));
        }
    });
        
    $('#change-screen-color').ColorPicker({
        color: '#73D8FA',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('.screen').css('background-color', '#' + hex);
        }
    });
    
    $('#change-wall-color').ColorPicker({
        color: '#ffffff',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('body').css('background-color', '#' + hex);
        }
    });

})