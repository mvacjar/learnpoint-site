document.addEventListener('DOMContentLoaded', () => {
  detectPreferredColorScheme();
  detectScreenMode();
});

document.addEventListener('click', (event) => {
  if (event.target.matches('.footer__select-light-mode-button')) {
    applyColorMode('is-lightmode');
  } else if (event.target.matches('.footer__select-dark-mode-button')) {
    applyColorMode('is-darkmode');
  }
});

function applyColorMode(mode) {
  document.documentElement.className = mode;
  document.body.className = mode;
  localStorage.setItem('selected-color-mode', mode);

  updateLogo();
}

function detectPreferredColorScheme() {
  const savedMode = localStorage.getItem('selected-color-mode');

  if (savedMode) {
    applyColorMode(savedMode);
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    applyColorMode('is-darkmode');
  } else {
    applyColorMode('is-lightmode');
  }
}

function detectScreenMode() {
  const MOBILE_WIDTH = 768;
  const query = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`);

  query.addEventListener('change', setScreenMode);
  setScreenMode();

  function setScreenMode() {
    if (query.matches) {
      document.documentElement.classList.add('is-mobile');
      document.documentElement.classList.remove('is-desktop');
    } else {
      document.documentElement.classList.add('is-desktop');
      document.documentElement.classList.remove('is-mobile');
    }

    updateLogo();
  }
}

function updateLogo() {
  const mode = localStorage.getItem('selected-color-mode') || 'is-lightmode';
  const isMobile = document.documentElement.classList.contains('is-mobile');

  document
    .querySelectorAll('.header__logo-desktop-img, .header__logo-mobile-img')
    .forEach((img) => {
      img.style.display = 'none';
    });

  if (mode === 'is-darkmode') {
    if (isMobile) {
      document.querySelector('.dark-mobile-mode-logo').style.display = 'block';
    } else {
      document.querySelector('.dark-desktop-mode-logo').style.display = 'block';
    }
  } else {
    if (isMobile) {
      document.querySelector('.light-mobile-mode-logo').style.display = 'block';
    } else {
      document.querySelector('.light-desktop-mode-logo').style.display =
        'block';
    }
  }
}
