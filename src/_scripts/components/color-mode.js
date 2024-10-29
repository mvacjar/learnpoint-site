(function () {
  const applyColorScheme = (mode) => {
    document.documentElement.classList.remove('is-light', 'is-dark');
    document.documentElement.classList.add(mode);
    localStorage.setItem('selected-color-mode', mode);
  };

  const detectPreferredColorScheme = () => {
    const savedMode = localStorage.getItem('selected-color-mode');

    if (savedMode) {
      applyColorScheme(savedMode);
    } else if (
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      applyColorScheme('is-dark');
    } else {
      applyColorScheme('is-light');
    }
  };

  detectPreferredColorScheme();

  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add(
      localStorage.getItem('selected-color-mode') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'is-dark'
          : 'is-light')
    );
  });

  document.addEventListener('click', (event) => {
    const lightButton = event.target.closest(
      '.footer__select-light-mode-button'
    );
    const darkButton = event.target.closest(
      '.footer__select-dark-mode-button'
    );

    if (lightButton) {
      applyColorScheme('is-light');
    } else if (darkButton) {
      applyColorScheme('is-dark');
    }
  });
})();
