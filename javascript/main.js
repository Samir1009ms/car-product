const video = document.querySelector(".video");

video.addEventListener("ended", () => {
  video.play();
});

const taxiVideo=document.querySelector(".taxi-play")

taxiVideo.addEventListener("ended", () => {
  taxiVideo.play();
});
