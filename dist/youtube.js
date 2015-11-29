var player;

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

$('.youtube_play').click(event => {
  const id = $(event.target).data('id');
  player.loadVideoById({
    'videoId': id,
    'startSeconds': 0,
    'suggestedQuality': 'large'
  });
});

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  console.log(event.data);
  if (event.data === YT.PlayerState.ENDED) {
    window.location.href = '2';
  }
}
