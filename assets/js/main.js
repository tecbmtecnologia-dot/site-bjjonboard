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

// Load YouTube iframes only when the visitor clicks play (faster initial page load)
document.querySelectorAll(".video-frame[data-video-id]").forEach((frame) => {
  frame.addEventListener("click", function onClick() {
    const videoId = frame.getAttribute("data-video-id");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
    iframe.title = "Vídeo BJJ Onboard";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    frame.innerHTML = "";
    frame.appendChild(iframe);
    frame.removeEventListener("click", onClick);
  });
});

// Update the footer year automatically
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
