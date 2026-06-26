const video = document.getElementById("wildlifeVideo");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", function () {
  if (!video.paused) {
    video.pause();
    video.style.display = "none";
    btn.textContent = "Play Video";
  } else {
    video.style.display = "block";
    video.play();
    btn.textContent = "Hide Video";
  }
});
