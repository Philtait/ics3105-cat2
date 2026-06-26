const video = document.getElementById("wildlifeVideo");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", function () {
  // If video is hidden, show it and play
  if (video.style.display === "none") {
    video.style.display = "block";
    video.play();
    btn.textContent = "Hide Video";
  } else {
    // If video is playing, pause and hide it
    video.pause();
    video.style.display = "none";
    btn.textContent = "Play Video";
  }
});
