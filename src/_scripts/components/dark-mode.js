(function () {
    const getDarkMode = () => {
        const savedMode = localStorage.getItem('dark-mode');
        if (savedMode !== null) return savedMode === 'true';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const setDarkMode = (isDarkMode) => {
        document.documentElement.classList.toggle('is-dark', isDarkMode);
        document.documentElement.classList.toggle('is-light', !isDarkMode);
        localStorage.setItem('dark-mode', isDarkMode ? 'true' : 'false');
    };

    const toggleDarkMode = () => setDarkMode(!getDarkMode());

    document.addEventListener('click', (event) => {
        const toggleButton = event.target.closest('.footer__dark-mode-icon');
        if (!toggleButton) {
        return;
        }

        toggleDarkMode();
    });

    setDarkMode(getDarkMode());
})();
