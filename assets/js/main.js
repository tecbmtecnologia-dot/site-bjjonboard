// Only one FAQ item open at a time
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".faq-item").forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});

// Load videos only when the visitor clicks play (faster initial page load)
document.querySelectorAll(".video-frame[data-video-id], .video-frame[data-video-src]").forEach((frame) => {
  frame.addEventListener("click", function onClick() {
    const videoId = frame.getAttribute("data-video-id");
    const videoSrc = frame.getAttribute("data-video-src");
    let player;
    if (videoSrc) {
      player = document.createElement("video");
      player.src = videoSrc;
      player.controls = true;
      player.autoplay = true;
      player.playsInline = true;
    } else {
      player = document.createElement("iframe");
      player.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
      player.title = "Vídeo BJJ Onboard";
      player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      player.allowFullscreen = true;
    }
    frame.innerHTML = "";
    frame.appendChild(player);
    frame.removeEventListener("click", onClick);
  });
});

// Update the footer year automatically
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
