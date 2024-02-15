import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["resetBtn", "btn"];
  connect() {}

  disable(event) {
    const btn = event.currentTarget;
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-danger");
    btn.innerText = "Bingo !";
    btn.disabled = true;
    this.resetBtnTarget.classList.remove("d-none");
  }

  reset() {
    this.btnTarget.classList.remove("btn-danger");
    this.btnTarget.classList.add("btn-primary");
    this.btnTarget.innerText = "Click me !";
    this.btnTarget.disabled = false;
    this.resetBtnTarget.classList.add("d-none");
  }
}
