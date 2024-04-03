const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementsByClassName('close')[0];
const video = document.getElementById('video');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  stopVideo();
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    stopVideo();
  }
});

function stopVideo() {
  // Detener la reproducción del video
  const videoSrc = video.src;
  video.src = videoSrc;
}

