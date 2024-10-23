document.addEventListener('DOMContentLoaded', () => {
  detectPreferredColorScheme();
});

document.addEventListener('click', (event) => {
  if (event.target.matches('.footer__select-light-mode-button')) {
    applyColorMode('is-lightmode');
  } else if (event.target.matches('.footer__select-dark-mode-button')) {
    applyColorMode('is-darkmode');
  }
});

function applyColorMode(mode) {
  document.documentElement.classList.remove('is-lightmode', 'is-darkmode');
  document.documentElement.classList.add(mode);
  localStorage.setItem('selected-color-mode', mode);
}

function detectPreferredColorScheme() {
  const savedMode = localStorage.getItem('selected-color-mode');

  if (savedMode) {
    applyColorMode(savedMode);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyColorMode('is-darkmode');
  } else {
    applyColorMode('is-lightmode');
  }
}
