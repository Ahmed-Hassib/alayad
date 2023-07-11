function playVideo(videoElID) {
  let videoEl = document.querySelector(`#${videoElID}`);
  videoEl.play();
}

function muteVideo(videoElID) {
  let videoEl = document.querySelector(`#${videoElID}`);
  videoEl.volume = 0;
  videoEl.muted = true;
}
