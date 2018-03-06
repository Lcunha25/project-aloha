$('.clic-nav').ready(function() {

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

$('.subscribe').ready(function() {
    $('.s_button').click(function(event) {
    event.preventDefault();
    var email_c = $('.button_t').val();
    if (validateEmail(email_c)) {
    alert('Thanks for subscribing!');
    }
    else {
    alert('Please Enter A Valid E-Mail');
    }
    });
});

function validateEmail(email_c) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(email_c)) {
    return true;
    }
    else {
    return false;
    }
    }