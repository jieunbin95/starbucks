const searchEl = document.querySelector('.search')
// search요소에 후손요소인 input을 가져와야하는 위에 search요소를 찾았기 때문에 document대신 searchEl를 입력해준다
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  // input태그를 마우스로 클릭하여 입력상태로 만든것을 포커스를 얻었다고 한다
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  // searchInputEl에 속성,속상값을 추가해주는 의미(setAttribute('속성', '속성값')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

// 입력상태를 떠난것을 포커스가 벗어났다(blur상태)고 한다
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


const thisYear=document.querySelector('.this-year')
// 현재 연도에 맞게 자동 생성해준다
thisYear.textContent=new Date().getFullYear()