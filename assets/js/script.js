$(function(){
    // side-menu - Scroll container
    // sc-visual - auto slide swiper
    //=>페이지네이션만 있는 거 말고 프로그래스 바까지 있는 걸로 사용해야함
    // Autoplay progress
    var mainSlide = new Swiper(".sc-visual .swiper", {
      slidesPerView: "auto",  
      spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".pagination",
          type: "progressbar",
          clickable: true,
        },
      });
    
    // sc-nbest - navigation
    var nbestSlide = new Swiper(".sc-nbest .swiper", {
       loop:true,
       loopAdditionalSlides: 1,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });

    // sc-gift - Slides per view auto
    var giftSlide = new Swiper(".sc-gift .swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop:true,
      loopAdditionalSlides: 1,
      pagination: {
        el: ".pagination",
        type: "progressbar",
        clickable: true,
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });

    // sc-live - Slides per view auto
    var liveSlide = new Swiper(".sc-live .swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop:true,
      loopAdditionalSlides: 1,
      pagination: {
        el: ".pagination",
        type: "progressbar",
        clickable: true,
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });

    // sc-tok

    // sc-tok iframe 
    livetokEl = 
    `<div class="iframe-area">
    <div class="iframe-box"><iframe src="https://www.tiktok.com/embed/v2/7222934678418820353?lang=ko-KR" frameborder="0"></iframe></div>
    <button class="close"><span class="blind">틱톡 팝업 닫기</span></button>
    </div>`;

    // iframe on
    $('.sc-tok .swiper-slide a').click(function(e){
      e.preventDefault();
      $('.sc-tok').append(livetokEl);
    })

    //iframe remove
    $('.iframe-area .close').click(function(){
      $('.iframe-area').remove();
    })


    // sc-board - Vertical
    var bdSlide = new Swiper(".sc-board .swiper", {
      direction: "vertical",
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });
})

