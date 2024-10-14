document.addEventListener('DOMContentLoaded', () => {
  detectPreferredColorScheme();
});

document.addEventListener('click', (event) => {
  if (event.target.matches('.footer__select-light-mode-button')) {
    applyColorMode('light-mode');
  } else if (event.target.matches('.footer__select-dark-mode-button')) {
    applyColorMode('dark-mode');
  }
});

function detectPreferredColorScheme() {
  const savedMode = localStorage.getItem('selected-color-mode');
  if (savedMode) {
    applyColorMode(savedMode);
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    applyColorMode('dark-mode');
  } else {
    applyColorMode('light-mode');
  }
}

function applyColorMode(mode) {
  document.body.className = mode;
  localStorage.setItem('selected-color-mode', mode);
}
