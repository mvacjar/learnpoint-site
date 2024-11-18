(function () {
  const getScheme = () => {
    const savedMode = localStorage.getItem('selected-color-scheme');
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return savedMode || (prefersDarkMode ? 'is-dark' : 'is-light');
  };

  const setScheme = (mode) => {
    document.documentElement.classList.remove('is-light', 'is-dark');
    document.documentElement.classList.add(mode);
    localStorage.setItem('selected-color-scheme', mode);
  };

  const applyColorScheme = () => {
    const initialMode = getScheme();
    setScheme(initialMode);
  };

  const initSchemeToggle = () => {
    const toggleButton = document.getElementById('toggle-scheme-btn');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        const currentMode = document.documentElement.classList.contains(
          'is-dark'
        )
          ? 'is-dark'
          : 'is-light';
        const newMode = currentMode === 'is-dark' ? 'is-light' : 'is-dark';
        setScheme(newMode);
      });
    }
  };

  applyColorScheme();

  document.addEventListener('DOMContentLoaded', initSchemeToggle);
})();
