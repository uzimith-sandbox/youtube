var player;

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
  if (event.data = YT.PlayerState.ENDED) {
    window.location.href = '/2';
  }
}
