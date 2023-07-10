$(function() {
    "use strict";
    var wind = $(window);
    
    // Main footer 
    var footer = $("footer").outerHeight();
    $("main").css("marginBottom", footer);
    
    // ScrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });
    
    // Navbar scrolling background
    wind.on("scroll",function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');
        }else{
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });
    // Close navbar-collapse when a  clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    
    // Testimonials owlCarousel
    $('.testimonails .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 15,
        mouseDrag:false,
        autoplay:false,
        smartSpeed:500
    });

    
    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , dots: false
        , mouseDrag: true
        , autoplay: false
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });

    // Services owlCarousel
    $('.proto-services .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , nav: false
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });

});

// Loading
$(window).on("load",function (){
    var wind = $(window);
    // Preloader
    $(".loading").fadeOut(500);
    // stellar
    wind.stellar();
});

// Slider 
$(document).ready(function() {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop:true,
        margin: 0,
        autoplay: true,
        smartSpeed:500,
         nav: true,
         navText: ['<i class="ti-arrow-right" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        margin: 0,
        autoplay: true,
        smartSpeed:500,
        animateOut: 'fadeOut',
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h4').removeClass('animated fadeInUp');
        $('h1').removeClass('animated fadeInUp');
        $('p').removeClass('animated fadeInUp');
        $('.butn').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });
});

// Contact Form
    // var form = $('.contact__form'),
    //     message = $('.contact__msg'),
    //     form_data;
    // // success function
    // function done_func(response) {
    //     message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    //     message.text(response);
    //     setTimeout(function () {
    //         message.fadeOut();
    //     }, 2000);
    //     form.find('input:not([type="submit"]), textarea').val('');
    // }
    // // fail function
    // function fail_func(data) {
    //     message.fadeIn().removeClass('alert-success').addClass('alert-success');
    //     message.text(data.responseText);
    //     setTimeout(function () {
    //         message.fadeOut();
    //     }, 2000);
    // }
    // form.submit(function (e) {
    //     e.preventDefault();
    //     form_data = $(this).serialize();
    //     $.ajax({
    //         type: 'POST',
    //         url: form.attr('action'),
    //         data: form_data
    //     })
    //     .done(done_func)
    //     .fail(fail_func);
    // });
    

    // 
    // 
    jQuery(document).ready(function($){
  
        window.onload = function (){
          $(".bts-popup").delay(1000).addClass('is-visible');
          }
        
          //open popup
          $('.bts-popup-trigger').on('click', function(event){
              event.preventDefault();
              $('.bts-popup').addClass('is-visible');
          });
          
          //close popup
          $('.bts-popup').on('click', function(event){
              if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
                  event.preventDefault();
                  $(this).removeClass('is-visible');
              }
          });
          //close popup when clicking the esc keyboard button
          $(document).keyup(function(event){
              if(event.which=='27'){
                  $('.bts-popup').removeClass('is-visible');
              }
          });
      });

//   bjkkjcjkefcbkejkc
function sendMail() {
    var params = {
      first: document.getElementById("first").value,
      last: document.getElementById("last").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      street: document.getElementById("street").value,
      state: document.getElementById("state").value,
      country: document.getElementById("country").value,
      gender: document.getElementById("gender").value,
      hips: document.getElementById("hips").value,
      waist: document.getElementById("waist").value,
      bust: document.getElementById("bust").value,
      hair: document.getElementById("hair").value,
      bank: document.getElementById("bank").value,
  
    };
  
    const serviceID = "service_kzfnk6m"
    const templateID = "template_e4y4wdn"
  
  emailjs.send(serviceID,templateID,params)
  .then(
    res => {
      document.getElementById("first").value = "";
      document.getElementById("last").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("address").value = "";
      document.getElementById("street").value = "";
      document.getElementById("state").value = "";
      document.getElementById("country").value = "";
      document.getElementById("gender").value = "";
      document.getElementById("hips").value = "";
      document.getElementById("waist").value = "";
      document.getElementById("bust").value = "";
      document.getElementById("hair").value = "";
      document.getElementById("bank").value = "";
  
      console.log(res);
      alert("your message sent successfully");
    })
    // .catch((err) => console.log(err));
  }
  
  