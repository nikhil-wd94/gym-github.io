/*=====================NAVBAR CHANGE BG=======================*/
$(window).scroll(function () {
    if ($(this).scrollTop() < 500) {
        $("nav").removeClass("bg-custom");
        $(".scroll-to-top").fadeOut();
        
        
    } else {
        $("nav").addClass("bg-custom");
        $(".scroll-to-top").fadeIn();
    }
});

/*=====================SMOOTH SCROLLING=======================*/
$("a.smooth-scroll").click(function(event){
    event.preventDefault();
    
    /*return section id when corresponding nav itm is clicked*/
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop:$(section).offset().top - 50
    }, 1500 /*duration*/);
});


/*
 $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
*/

/*==========================MODAL=======================*/
$(".envelope").click(function () {
    $(".overlay").toggleClass("active");
    $(".newsletter-modal").toggleClass("modal-active");
});

$(".newsletter-modal-close").click(function () {
    $(".overlay").toggleClass("active");
    $(".newsletter-modal").toggleClass("modal-active");
});



/*========================TRAINING PROGRAMS=======================*/

$(".training-option").click(
    function () {
        $(".training-option").removeClass("option-active");
        $(this).addClass("option-active");
    }
);

$(".training-option:nth-of-type(1)").click(
    function () {
        $(".training-box-l").css('background-image', 'url(https://greatist.com/sites/default/files/styles/fb-1200x630/public/weight-vs-rep.jpg?itok=TFOvHshi)');
    }
);

$(".training-option:nth-of-type(2)").click(
    function () {
        $(".training-box-l").css('background-image', 'url(images/z.jpg)');
    }
);

$(".training-option:nth-of-type(3)").click(
    function () {
        $(".training-box-l").css('background-image', 'url(https://www.precor.com/en-au/blog/wp-content/uploads/sites/3/2014/08/Precor_In-Club_TRM-885_2717-1024x683.jpg)');
    }
);


/*
$(".training-option").hover(
    function () {
        $(".training-option").removeClass("option-active");
        $(this).addClass("option-active");
    }
);


$(".training-option:nth-of-type(2)").hover(
    function () {
        $(".training-box-l").css('background-image', 'url(images/z.jpg)');
    },
    function () {
        $(".training-box-l").css('background-image', 'url(https://greatist.com/sites/default/files/styles/fb-1200x630/public/weight-vs-rep.jpg?itok=TFOvHshi)');
    }
);

$(".training-option:nth-of-type(3)").hover(
    function () {
        $(".training-box-l").css('background-image', 'url(https://www.precor.com/en-au/blog/wp-content/uploads/sites/3/2014/08/Precor_In-Club_TRM-885_2717-1024x683.jpg)');
    },
    function () {
        $(".training-box-l").css('background-image', 'url(https://greatist.com/sites/default/files/styles/fb-1200x630/public/weight-vs-rep.jpg?itok=TFOvHshi)');
    }
);
*/





/*

https://www.precor.com/en-au/blog/wp-content/uploads/sites/3/2014/08/Precor_In-Club_TRM-885_2717-1024x683.jpg

$("#f2").hover(function () {
    $('#feature-image').fadeOut(500, function () {
        $('#feature-image').attr("src", "images/1-3.png");
        $('#feature-image').fadeIn(500);
    });
});
*/
