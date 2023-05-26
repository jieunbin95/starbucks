const badgeEl = document.querySelector('header .badges')
const toTopEl=document.querySelector('#to-top')

// 모니터에 보여지는 화면을 window라고 함,스크롤될 때 실행되는 갯수를 줄여주어 버벅이는 효과를 줄여준다
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    // 배지를 숨긴다
    // badgeEl.style.display = 'none'
    // 화면의 투명도를 숫자로 표현하는 경우 자연스러운 화면보이기/숨기기 애니가 가능하지만, 숫자로 표현할 수 없는(display:none)경우 애니로 자연스러운 효과를 보기 어렵다
    // gsap.to(요소,지속시간,옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 하단에 있는 버튼 보이기
    gsap.to(toTopEl, .2, {
      x:0
    })
  } else {
    // badgeEl.style.display = 'block'
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 하단에 있는 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x:100
    })
  }
}, 300))
// _.throttle(함수,시간)

toTopEl.addEventListener('click',function(){
  gsap.to(window,.7,{
    scrollTo:0
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // index는 0부터 시작
    delay: (index + 1) * .7,
    opacity: 1
  })
})

// new Swiper('선택자,옵션')
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  // 자동재생(위아래로 swiper)
  autoplay: true,
  // 계속 진행
  loop: true
})

// 프로모션
new Swiper('.promotion .swiper-container', {
  // 화면에 보여질 이미지의 개수
  slidesPerView: 3,
  // 슬라이드 사이 여백
  spaceBetween: 10,
  // 1번슬라이드가 가운데 보이기
  centeredSlides: true,
  loop: true,
  autoplay: {
    // 5000=5초를 의미
    delay: 5000
  },
  pagination: {
    // 페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',
    // 사용자의 페이지 번호 요소 제어 가능여부
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

new Swiper('.awards .swiper-container',{
  autoplay:true,
  loop:true,
  spaceBetween:30,
  // 화면에 몇 개의 이미지를 보여줄건지
  slidesPerView:5,
  navigation:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})


const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', function () {
  // !반대의 값을 의미
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    // repeat값에 -1을 넣어주면 무제한으로 재생된다(이는 gsap에서 제공되는 기능 )
    repeat: -1,
    // 한번재생된 후 다시 되감기 해 반복
    yoyo: true,
    ease: Power1.easeInout,
    delay: random(0, delay)
  })
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls=document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
      .Scene({
        // 보여짐의 여부를 감시할 요소를 지칭
        triggerElement:spyEl,
        // 뷰포트의 맨 윗부분을 0, 맨 아래부분을 1이라고 했을 때, 스크롤을 할 때 0.8부분에서 애니메이션을 실행하라고 지칭
        triggerHook:.8
      })
      // setClassToggle(토글할 요소,요소에 지정될 클래스이름)
      .setClassToggle(spyEl,'show')
      .addTo(new ScrollMagic.Controller())
})