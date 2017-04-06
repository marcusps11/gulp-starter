(function () {

  let controller = {

    setElements() {
      this.main = document.querySelector('.container');
      this.buttons = Array.from(document.querySelectorAll('.asos-container__button'));
    },

    addEventListener() {
      this.buttons.addEventListener('click', this.toggleActiveClass.bind(this))
    },

    toggleActiveClass() {
      this.isMenuOpen = !this.isMenuOpen;
      this.showActiveContent();
    },

  
  toggleMenu() {
    if (this.isMenuOpen) {
      this.buttons.classList.add('.menu-open');
    } else { 
      this.buttons.classList.remove('.menu-open');
    }
  },

    init() {
      document.addEventListener('DOMContentLoaded', this.onLoaded.bind(this))
    },

    onLoaded() {
      this.setElements();
    }
  }

  controller.init()
}());