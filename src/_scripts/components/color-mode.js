// (function () {
//   const applyColorScheme = (mode) => {
//     document.documentElement.classList.remove('is-light', 'is-dark');
//     document.documentElement.classList.add(mode);
//     localStorage.setItem('selected-color-scheme', mode);
//   };

//   const detectPreferredColorScheme = () => {
//     const savedMode = localStorage.getItem('selected-color-scheme');

//     if (savedMode) {
//       applyColorScheme(savedMode);
//     } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       applyColorScheme('is-dark');
//     } else {
//       applyColorScheme('is-light');
//     }
//   };

//   detectPreferredColorScheme();

//   document.addEventListener('DOMContentLoaded', () => {
//     document.documentElement.classList.add(
//       localStorage.getItem('selected-color-scheme') ||
//         (window.matchMedia('(prefers-color-scheme: dark)').matches
//           ? 'is-dark'
//           : 'is-light')
//     );
//   });

//   document.addEventListener('click', (event) => {
//     if (event.target.matches('.footer__select-light-mode-button')) {
//       applyColorScheme('is-light');
//     } else if (event.target.matches('.footer__select-dark-mode-button')) {
//       applyColorScheme('is-dark');
//     }
//   });
// })();

(function () {
  const applyColorScheme = (mode) => {
    document.documentElement.classList.remove('is-light', 'is-dark');
    document.documentElement.classList.add(mode);
    localStorage.setItem('selected-color-scheme', mode);
  };

  const detectPreferredColorScheme = () => {
    const savedMode = localStorage.getItem('selected-color-scheme');

    if (savedMode) {
      applyColorScheme(savedMode);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyColorScheme('is-dark');
    } else {
      applyColorScheme('is-light');
    }
  };

  detectPreferredColorScheme();

  document.addEventListener('DOMContentLoaded', () => {
    const switchToggle = document.getElementById('switch');
    if (switchToggle) {
      switchToggle.checked =
        localStorage.getItem('selected-color-scheme') === 'is-dark';
      switchToggle.addEventListener('change', (event) => {
        applyColorScheme(event.target.checked ? 'is-dark' : 'is-light');
      });
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.matches('.icon-sun')) {
      applyColorScheme('is-light');
    } else if (event.target.matches('.icon-moon')) {
      applyColorScheme('is-dark');
    }
  });
})();

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('switch');
    const iconSun = document.querySelector('.icon-sun');
    const iconMoon = document.querySelector('.icon-moon');

    if (toggleSwitch.checked) {
      iconSun.classList.remove('hidden');
      iconMoon.classList.add('hidden');
    } else {
      iconSun.classList.add('hidden');
      iconMoon.classList.remove('hidden');
    }

    toggleSwitch.addEventListener('change', () => {
      if (toggleSwitch.checked) {
        iconSun.classList.remove('hidden');
        iconMoon.classList.add('hidden');
      } else {
        iconSun.classList.add('hidden');
        iconMoon.classList.remove('hidden');
      }
    });
  });
})();
