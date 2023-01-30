$("document").ready(function(){

    AOS.init();

    $(".recipe .recipe-content-wrap").eq(0).show()


    //쿡웨어 슬라이드

    const swiper = new Swiper(".cook",{
        autoplay:{
            delay: 2500,
            disableOnInteraction: false
        },
        slidesPerView: 5,
        spaceBetween: 5,
        loop: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    })


    //상품 슬라이드

    const swiper2 = new Swiper(".container",{
        autoplay:{
            delay: 1500,
            disableOnInteraction: false
        },
        slidesPerView: 4,
        spaceBetween: 60,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true
        },
        mousewheel: {
            invert: true,
        }
    })

    //뷰 디테일 위 슬라이드 멈춤

    $(".product-content .product-txt").mouseover(function(){
        swiper2.autoplay.stop()
    }).mouseout(function(){
        swiper2.autoplay.start()
    })

//레시피    

    let r = 0;

    $(".recipe .arrow-next").click(function(e){
        e.preventDefault()
        r++;
        if (r > $(".recipe .recipe-content").length-1) {
            r = 0;
        }
        $(".recipe .recipe-content-wrap").hide().eq(r).fadeIn(1000)
    })

    $(".recipe .arrow-prev").click(function(e){
        e.preventDefault()
        r--;
        if (r > $(".recipe .recipe-content").length-1) {
            r = 0;
        }
        $(".recipe .recipe-content-wrap").hide().eq(r).fadeIn(1000)
    })




})//jq