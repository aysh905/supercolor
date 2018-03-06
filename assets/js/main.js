$(function(){

    $('.slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: "<div class='arrow prev'><img src='assets/images/left-arrow.png' alt='left arrow'/></div>",
        nextArrow: "<div class='arrow next'><img src='assets/images/right-arrow.png' alt='right arrow'/></div>"
    });

    $('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var hide = currentSlide+1
        var show = nextSlide+1;
        $(".text-content"+hide).hide();
        $(".text-content"+show).show();
    });

    $("#bar-toggle").on("click", function(){
        $("#nav-bar").toggleClass("active");
    });

    $('.dropdown, .dropdown-img').on("click", function(){
        $(this).children(".dropdown-menu").toggleClass("show");
    });
});