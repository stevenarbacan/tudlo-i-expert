class Nav {
  #toggle = document.querySelector(".toggle");
  #navBar = document.querySelector(".nav-bar");
  #accountBtn = document.querySelector(".account-btn");
  #overlay = document.querySelector(".overlay");
  #accountModal = document.querySelector(".account-modal");
  #closeModalBtn = document.querySelector(".close-modal-btn");
  #tabBtns = document.querySelectorAll(".tab-btn");

  constructor() {
    this.#toggle.addEventListener("click", this._toggleSidebar.bind(this));
    this.#accountBtn.addEventListener(
      "click",
      this._openAccountModal.bind(this)
    );
    this.#closeModalBtn.addEventListener(
      "click",
      this._closeAccountModal.bind(this)
    );
  }
  _toggleSidebar() {
    this.#navBar.classList.toggle("aside-bar");
  }
  _openAccountModal() {
    this.#accountModal.classList.remove("hidden");
    this.#overlay.classList.remove("hidden");
  }
  _closeAccountModal() {
    this.#accountModal.classList.add("hidden");
    this.#overlay.classList.add("hidden");
  }
}
const nav = new Nav();
