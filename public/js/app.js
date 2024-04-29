const App = {
  $: {
    hamburgerBtn: document.querySelector('[data-id="hamburger-btn"]'),
    menuOpen: document.querySelector('[data-id="menu-open"]'),
    menuClose: document.querySelector('[data-id="menu-close-btn"]'),
    imgWeb: document.querySelector('[data-id="image-web-3"]'),
    mobileMenu: document.querySelector('[data-id="mobile-menu"]'),
    body: document.getElementById('body'),
  },

  init() {
    App.evtHandlers();
  },

  evtHandlers() {
    App.$.hamburgerBtn.addEventListener('click', (event) => {
      App.$.mobileMenu.classList.toggle('hidden');
    });
    App.$.menuClose.addEventListener('click', (event) => {
      App.$.mobileMenu.classList.toggle('hidden');
    });
  },
};

window.addEventListener('load', App.init());
