$(function(){
    var carouselWidth = $(".owl-carousel").width()-30;
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items: 4,
        nav: true,
        dots: false,
        callbacks: true,
        itemsScaleUp: true,
        navText: ["<div class='arrow'><img src='assets/images/left-arrow.png' alt='left arrow'/></div>","<div class='arrow'><img src='assets/images/right-arrow.png' alt='right arrow'/></div>"],
        onChanged:function(){
            //add transform for 2nd active slide
            $(".owl-item.active").eq(1).css({width: (carouselWidth/10)*3.1});
            $(".owl-item.active").eq(2).css({width: (carouselWidth/10)*2.3});
            $(".owl-item.active").eq(3).css({width: (carouselWidth/10)*2.3});
            $(".owl-item.active").eq(4).css({width: (carouselWidth/10)*2.3});
        },
        //set init transform
        onInitialized:function(){

            $(".owl-item.active").eq(0).css({width: (carouselWidth/10)*3.1});
            $(".owl-item.active").eq(1).css({width: (carouselWidth/10)*2.3});
            $(".owl-item.active").eq(2).css({width: (carouselWidth/10)*2.3});
            $(".owl-item.active").eq(3).css({width: (carouselWidth/10)*2.3});
        },
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $("#bar-toggle").on("click", function(){
        $("#nav-bar").toggleClass("active");
    });

    $('.dropdown, .dropdown-img').on("click", function(){
        $(this).children(".dropdown-menu").toggleClass("show");
    });
});