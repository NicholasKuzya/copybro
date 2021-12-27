// add_event(document, 'DOMContentLoaded', common.init);

// // PAGE

// var common = {

//     init: function() {


//     }

// }
w_width = $(window).width();
function tabHide()
{
    

      if(w_width < 768)
      {
        $('.b-tab-plane, .b-nav-link').removeClass('show');
         $('.b-tab-plane, .b-nav-link').removeClass('active');
      }
}
$(document).ready(function(){

	if(w_width < 768)
 {
	 if(!$('.b-faq').hasClass('hasClick'))
  {    tabHide();

  }


  $('.b-nav-link').click(function(){
          $('.b-faq').addClass('hasClick');
  });

  
  $('.b-faq-back').click(function(){
      $('.b-faq').removeClass('hasClick');
          tabHide();
          return false;
  });
 }


    




    





    





    offersSlider =  $(".offersSlider");
   offersSlider.owlCarousel({
        items: 3,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2,
                margin: 200,
            },
            1000:{
                items:3
            }
        }
    });

    $('.offersSlider__prev').click(function(){
        offersSlider.trigger('prev.owl.carousel');

    });
    $('.offersSlider__next').click(function(){
        offersSlider.trigger('next.owl.carousel');
 
    })
  });

  $(window).resize(function(){
   if(!$('.b-faq').hasClass('hasClick'))
    {    tabHide();

    }

  });

const animItems = document.querySelectorAll('.anm');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 10;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
            }else {
                if (!animItem.classList.contains('_anm-no-hide')) {
                    animItem.classList.remove('_active');
                }
                
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
    }
    setTimeout(() => {
        animOnScroll();
    }, 100);
}
