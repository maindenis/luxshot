var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {

    $("[data-thumbs-link]").on("click", function(e) {
        e.preventDefault();
        name = $(this).attr("data-thumbs-link");
        $("[data-thumbs = '"+name+"'] .thumb_photo").removeClass("hide");
        $(this).remove();
    });

    Fancybox.bind("[data-fancybox]", {});

});