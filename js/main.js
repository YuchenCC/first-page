var swiperBanner = new Swiper('#banner>.bigphoto>.swiper-container',{
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    speed: 4000,
    effect : 'fade',
    zoom : true,
    zoomMax :2,
});

window.onload = function(){
    let h = document.documentElement.clientWidth
    console.log(h)
    Swiper.call(undefined,'#showList>.show>.swiper-container', {
                breakpoints: { 
                //当宽度小于等于320
                797: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 10
                    },
            //当宽度小于等于480
                1030: { 
                    slidesPerView: 2,
                    spaceBetweenSlides: 20
                    },
                //当宽度小于等于640
                3000: {
                    slidesPerView: 3,
                    spaceBetweenSlides: 30
                    }
                },           
                autoplay: 1000,
                speed: 5000,
                effect: 'coverflow',
                initialSlide:4, 
                autoplayDisableOnInteraction: false,        
                coverflow: {
                        rotate: 30,
                        stretch: 10,
                        depth: 60,
                        modifier: 2,
                        slideShadows : false,
                       },
                onReachEnd: function(swiper){
                                swiper.stopAutoplay()
                                swiper.slideTo(4, 100, true)
                                swiper.startAutoplay()
                                console.log('1')                        
                            }
    
    })
}
           
/*            
        })
    }
    else if (h <= 797){
            var swiper = new Swiper('#showList>.show>.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                slidesPerColumn: 3,
                paginationClickable: true,
                spaceBetween: 30,
                autoplay: 3000,
                speed: 2000,

            })
        }
        else {
            var swiper = new Swiper('#showList>.show>.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 3,
                slidesPerColumn: 2,
                paginationClickable: true,
                spaceBetween: 30,
                autoplay: 3000,
                speed: 2000,
              
            })
        }
}
*/
