$(function(){
    $('.slider').slick({
        prevArrow: ' <button class="click__arrow prev"><img src="images/prev.svg" alt="prev"></button>',
        nextArrow: '<button class="click__arrow next"><img src="images/next.svg" alt="next"></button>',
        responsive: [
        {
          breakpoint: 441,
          settings: {
            arrows: false
          }
        }
      ]
    });
});



