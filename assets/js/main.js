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
	$('.next-button').on("click", function(){
        $("#"+$(this).attr("data-target-id")).trigger("click");
    });

    // Dropdown functions
    var subMenu, subMenuContent;
    $("body").on("mouseenter", ".nav-dropdown  ul.main-menu li", function(){
        var element = $(this);
        var imageSrc = element.attr("data-image");
        var imageContainer = element.parents(".nav-dropdown").find(".dropdown-image-container");
        $(".nav-dropdown ul.main-menu li").removeClass("active");
        element.addClass("active");
        subMenu = element.parents(".nav-dropdown").children(".sub-dropdown");
        subMenuContent = element.children(".nav-sub-dropdown").length ? element.children(".nav-sub-dropdown").html() : false;
        if(imageSrc) {
            imageContainer.show();
            element.addClass("image-exists");
        } else {
            element.removeClass("image-exists");
        }
        if(subMenuContent) {
            subMenu.html(subMenuContent);
            subMenu.show();
        } else {
            subMenu.hide();
        }
        imageContainer.children("img").attr("src", imageSrc);
    });
    $("body").on("mouseleave", ".nav-dropdown  ul.main-menu li", function(){
        var element = $(this);
        var imageSrc = element.attr("data-image");
        var imageContainer = element.parents(".nav-dropdown").find(".dropdown-image-container");
        var subMenu = element.parents(".nav-dropdown").children(".sub-dropdown");
        subMenuContent = false;
        element.removeClass("active image-exists");
        imageContainer.hide();
    });

    $("body").on("mouseenter", ".nav-dropdown ul.sub-menu li", function(){
        var element = $(this);
        var imageSrc= element.attr("data-image");
        var imageContainer= element.parents(".nav-dropdown").find(".sub-dropdown-image-container");
        $(".nav-dropdown ul.sub-menu li").removeClass("active");
        element.addClass("active");
        if(imageSrc) {
            imageContainer.show();
            element.addClass("image-exists");
        } else {
            element.removeClass("image-exists");
        }
        imageContainer.children("img").attr("src", imageSrc);
    });
    $("body").on("mouseleave", ".nav-dropdown  ul.sub-menu li", function(){
        var element = $(this);
        var imageSrc= element.attr("data-image");
        var imageContainer= element.parents(".nav-dropdown").find(".sub-dropdown-image-container");
        imageContainer.hide();
        element.removeClass("active image-exists");
    });
});