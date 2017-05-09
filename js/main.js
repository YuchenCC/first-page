var swiperBanner = new Swiper('#banner>.bigphoto>.swiper-container',{
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    speed: 4000,
    effect : 'fade',
    zoom : true,
    zoomMax :2,
});

window.onload = function(){
    let h = document.documentElement.clientWidth;
    console.log(h)
    if (h < 1030 && h > 797){
        var swiper = new Swiper('#showList>.show>.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 2,
            slidesPerColumn: 2,
            paginationClickable: true,
            spaceBetween: 30,
            autoplay: 3000,
            speed: 2000,

           
            
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

