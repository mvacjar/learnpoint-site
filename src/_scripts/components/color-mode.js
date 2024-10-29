// document.addEventListener('DOMContentLoaded', () => {
//   detectPreferredColorScheme();
// });

// document.addEventListener('click', (event) => {
//   const toggleSwitch = document.querySelector(
//     '.footer__select-color-mode-panel input[type="checkbox"]'
//   );

//   if (event.target.matches('.footer__select-light-mode-button')) {
//     applyColorScheme('is-light');
//     toggleSwitch.checked = false;
//   } else if (event.target.matches('.footer__select-dark-mode-button')) {
//     applyColorScheme('is-dark');
//     toggleSwitch.checked = true;
//   } else if (
//     event.target.matches(
//       '.footer__select-color-mode-panel input[type="checkbox"]'
//     )
//   ) {
//     applyColorScheme(toggleSwitch.checked ? 'is-dark' : 'is-light');
//   }
// });

// function applyColorScheme(mode) {
//   document.documentElement.classList.remove('is-light', 'is-dark');
//   document.documentElement.classList.add(mode);
//   localStorage.setItem('selected-color-mode', mode);
// }

// function detectPreferredColorScheme() {
//   const savedMode = localStorage.getItem('selected-color-mode');
//   const toggleSwitch = document.querySelector(
//     '.footer__select-color-mode-panel input[type="checkbox"]'
//   );
//   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//   if (savedMode) {
//     applyColorScheme(savedMode);
//     toggleSwitch.checked = savedMode === 'is-dark';
//   } else {
//     applyColorScheme(prefersDark ? 'is-dark' : 'is-light');
//     toggleSwitch.checked = prefersDark;
//   }
// }

// (function () {
//   const savedMode = localStorage.getItem('selected-color-mode');
//   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//   const mode = savedMode || (prefersDark ? 'is-dark' : 'is-light');
//   document.documentElement.classList.add(mode);
// })();

/////////

// document.addEventListener('DOMContentLoaded', () => {
//   detectPreferredColorScheme();
// });

// document.addEventListener('click', (event) => {
//   if (event.target.matches('.footer__select-light-mode-button')) {
//     applyColorScheme('is-light');
//   } else if (event.target.matches('.footer__select-dark-mode-button')) {
//     applyColorScheme('is-dark');
//   }
// });

// function applyColorScheme(mode) {
//   document.documentElement.classList.remove('is-light', 'is-dark');
//   document.documentElement.classList.add(mode);
//   localStorage.setItem('selected-color-mode', mode);
// }

// function detectPreferredColorScheme() {
//   const savedMode = localStorage.getItem('selected-color-mode');

//   if (savedMode) {
//     applyColorScheme(savedMode);
//   } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     applyColorScheme('is-dark');
//   } else {
//     applyColorScheme('is-light');
//   }
// }

// (function () {
//   const savedMode = localStorage.getItem('selected-color-mode');
//   if (savedMode) {
//     document.documentElement.classList.add(savedMode);
//   } else if (
//     window.matchMedia &&
//     window.matchMedia('(prefers-color-scheme: dark)').matches
//   ) {
//     document.documentElement.classList.add('is-dark');
//   } else {
//     document.documentElement.classList.add('is-light');
//   }
// })();
