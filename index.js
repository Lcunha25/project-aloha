$(document).ready(function() {

    $('.slide_section').click(function(event){
        var linkHref=$(this).attr('href');
        console.log(linkHref);
    $('html, body').animate({
        scrollTop: $(linkHref).offset().top
    });
    event.preventDefault();
    });
});

// FLickity automatically arranging the sales bar
