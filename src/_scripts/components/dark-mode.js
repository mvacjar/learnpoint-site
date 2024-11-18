(function () {
  const getDarkMode = () => {
    const savedMode = localStorage.getItem('selected-dark-mode');
    if (savedMode !== null) return savedMode === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const setDarkMode = (isDarkMode) => {
    document.documentElement.classList.toggle('is-dark', isDarkMode);
    document.documentElement.classList.toggle('is-light', !isDarkMode);
    localStorage.setItem('selected-dark-mode', isDarkMode ? 'true' : 'false');
  };

  const toggleDarkMode = () => setDarkMode(!getDarkMode());

  const initToggleDarkMode = () => {
    const toggleButton = document.getElementById('footer__dark-mode-btn');
    toggleButton.addEventListener('click', toggleDarkMode);
  };

  setDarkMode(getDarkMode());

  document.addEventListener('DOMContentLoaded', initToggleDarkMode);
})();
