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
})