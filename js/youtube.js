// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // html의 id값인 player
  new YT.Player('player', {
    // 최초 재생할 유투브의 영상 id(주소부분에 맨끝부분)
    videoId: 'An6LvWQuj_8', 
    // 영상을 재생할 때 생기는 여러가지 변수들
    playerVars:{
      autoplay: true,
      loop:true,
      // 반복재생여부의 값이 true인 경우 아래에 playlist를 입력해주어야 한다
      playlist:'An6LvWQuj_8'
    },
    events:{
      // 객체 데이터 안에 또 다른 함수가 들어가 있는경우->매서드
      onReady:function(event) {
        event.target.mute()
      }
    }
  });
}