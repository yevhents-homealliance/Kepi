const backdrop = document.getElementById('myPopup');
const closeBtn = backdrop.querySelector('.popup-close-btn');
const cancelBtn = backdrop.querySelector('.btn-popup-secondary');

function closePopup() {
  backdrop.classList.remove('is-open');
}

closeBtn.addEventListener('click', closePopup);
cancelBtn.addEventListener('click', closePopup);

// Закриття при кліку поза межами самого вікна
backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) {
    closePopup();
  }
});