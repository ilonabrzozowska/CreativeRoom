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
        
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                
        var blue = $('#blue'),
            red = $('#red'),
            yellow = $('#yellow'),
            green = $('#green'),
            wallBlue = $('#wallBlue'),
            wallRed = $('#wallRed'),
            wallYellow = $('#wallYellow'),
            wallGreen = $('#wallGreen')
            ;
        
        $('#change-screen-color').click(function() {
            $('.color-screen-buttons').slideToggle('fast', function() {
                $('.color-screen-button').css('display', 'inline-block');
                $('.screen-text').css('display', 'block');
            })
            
            blue.click(function() {
                $('.screen').css('background-color', blue.css('background-color'));
            });
            red.click(function() {
                $('.screen').css('background-color', red.css('background-color'));
            });
            yellow.click(function() {
                $('.screen').css('background-color', yellow.css('background-color'));
            });
            green.click(function() {
                $('.screen').css('background-color', green.css('background-color'));
            });        
        })
        
        $('#change-wall-color').click(function() {          
            $('.color-wall-buttons').slideToggle('fast', function() {
                $('.color-wall-button').css('display', 'inline-block');
                $('.wall-text').css('display', 'block');
            })
            
            wallBlue.click(function() {
                $('body').css('background-color', wallBlue.css('background-color'));
            });
            wallRed.click(function() {
                $('body').css('background-color', wallRed.css('background-color'));
            });
            wallYellow.click(function() {
                $('body').css('background-color', wallYellow.css('background-color'));
            });
            wallGreen.click(function() {
                $('body').css('background-color', wallGreen.css('background-color'));
            });        
        })
    }
    else {
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
    }
    
    

})