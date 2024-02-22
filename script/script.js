class App {
  #toggle = document.querySelector(".toggle");
  #navBar = document.querySelector(".nav-bar");
  #navLinks = document.querySelector(".nav-links");
  #seeMoreBtn = document.querySelector(".see-more-btn");

  #accountBtn = document.querySelector(".account-btn");
  #overlay = document.querySelector(".overlay");
  #accountModal = document.querySelector(".account-modal");
  #closeModalBtn = document.querySelector(".close-modal-btn");
  #tabBtns = document.querySelectorAll(".tab-btn");
  #tabContentContainer = document.querySelectorAll(".tab-content-container");

  constructor() {
    this._init();
    this.#toggle.addEventListener("click", this._toggleSidebar.bind(this));
    this.#navLinks.addEventListener("click", this._gotoSection);
    this.#seeMoreBtn.addEventListener("click", this._gotoSection2);
    this.#accountBtn.addEventListener(
      "click",
      this._openAccountModal.bind(this)
    );
    this.#closeModalBtn.addEventListener(
      "click",
      this._closeAccountModal.bind(this)
    );
    this.#tabBtns.forEach((tab) =>
      tab.addEventListener("click", this._changeTab.bind(this))
    );
  }
  _gotoSection2(e) {
    e.preventDefault();
    document.querySelector("#section-2").scrollIntoView({ behavior: "smooth" });
  }
  _gotoSection(e) {
    e.preventDefault();
    if (!e.target.classList.contains("nav-link")) return;
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
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

  _changeTab(e) {
    if (!e.target.classList.contains("tab-btn")) return;
    const tab = e.target.dataset.tab;
    const curTab = !tab ? 1 : tab;
    this._goToTab(curTab);
    this._activateTabBtn(curTab);
  }
  _hideTab() {
    this.#tabContentContainer.forEach((tabContainer) =>
      tabContainer.classList.add("hidden")
    );
  }
  _activateTabBtn(btnNum) {
    this.#tabBtns.forEach((tBtn) => tBtn.classList.remove("active-tab"));
    document.querySelector(`.tab-${btnNum}`).classList.add("active-tab");
  }
  _goToTab(tab) {
    this._hideTab();
    document
      .querySelector(`.tab-content-container-${tab}`)
      .classList.remove("hidden");
  }

  _init() {
    this._hideTab();
    this._goToTab(1);
    this._activateTabBtn(1);
  }
}

const app = new App();
