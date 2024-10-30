(function () {
  const Mode = {
    dark: 'is-dark',
    light: 'is-light',
  };

  const applyColorScheme = (mode) => {
    document.documentElement.classList.remove('is-light', 'is-dark');
    document.documentElement.classList.add(mode);
    localStorage.setItem('selected-color-mode', mode);
  };

  function getColorScheme() {
    const savedMode = localStorage.getItem('selected-color-mode');

    if (savedMode) {
      return savedMode;
    } else if (
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'is-dark';
    } else {
      return 'is-light';
    }
  }

  applyColorScheme(getColorScheme());

  function toggleMode() {
    const currentMode = getColorScheme();
    if (currentMode === Mode.dark) {
      applyColorScheme(Mode.light);
    } else {
      applyColorScheme(Mode.dark);
    }
  }

  document.addEventListener('click', (event) => {
    const toggleButton = event.target.closest(
      '.footer__select-mode-button'
    );
    if (!toggleButton) {
      return;
    }

    toggleMode();

    // const lightButton = event.target.closest(
    //   '.footer__select-light-mode-button'
    // );
    // const darkButton = event.target.closest(
    //   '.footer__select-dark-mode-button'
    // );

    // if (lightButton) {
    //   applyColorScheme('is-light');
    // } else if (darkButton) {
    //   applyColorScheme('is-dark');
    // }
  });
})();
