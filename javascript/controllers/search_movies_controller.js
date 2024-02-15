import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "list"];
  connect() {}

  search() {
    const value = this.inputTarget.value;

    fetch(`http://www.omdbapi.com/?s=${value}&apikey=adf1f2d7`)
      .then((response) => response.json())
      .then((data) => {
        this.listTarget.innerHTML = "";
        this.insertMovies(data);
        this.inputTarget.value = "";
      });
  }

  insertMovies(data) {
    data.Search.forEach((movie) => {
      const movieHtml = `<li>
            <p>${movie.Title}</p>
            <img
              src="${movie.Poster}"
              alt="image du film"
              width="100"
            />
          </li>`;
      this.listTarget.insertAdjacentHTML("beforeend", movieHtml);
    });
  }
}
