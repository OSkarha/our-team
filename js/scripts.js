
$(document).ready(function() {

    $('.slider').slick({
        prevArrow: `<a href="#" class="slider__arrow slider__arrow--left">
                <svg class="inline-svg-icon" width="32px" height="32px">
                    <use xlink:href="#arrow"></use>
                </svg>
            </a>`,

        nextArrow: `<a href="#" class="slider__arrow slider__arrow--right">
                <svg class="inline-svg-icon" width="50px" height="32px">
                     <use xlink:href="#arrow"></use>
                 </svg>
                 </a>`,

    dots: true,

    dotsClass: "slider__dots"
        
    
    });
})