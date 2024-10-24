document.addEventListener('DOMContentLoaded', () => {
  detectPreferredColorScheme();
});

document.addEventListener('click', (event) => {
  if (event.target.matches('.footer__select-light-mode-button')) {
    applyColorScheme('is-light');
  } else if (event.target.matches('.footer__select-dark-mode-button')) {
    applyColorScheme('is-dark');
  }
});

function applyColorScheme(mode) {
  document.documentElement.classList.remove('is-light', 'is-dark');
  document.documentElement.classList.add(mode);
  localStorage.setItem('selected-color-mode', mode);
}

function detectPreferredColorScheme() {
  const savedMode = localStorage.getItem('selected-color-mode');

  if (savedMode) {
    applyColorScheme(savedMode);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyColorScheme('is-dark');
  } else {
    applyColorScheme('is-light');
  }
}

(function () {
  const savedMode = localStorage.getItem('selected-color-mode');
  if (savedMode) {
    document.documentElement.classList.add(savedMode);
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('is-dark');
  } else {
    document.documentElement.classList.add('is-light');
  }
})();
