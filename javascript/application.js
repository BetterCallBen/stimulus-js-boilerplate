import { Application, Controller } from "stimulus";
window.Stimulus = Application.start();

import DisableButtonController from "./controllers/disable_button_controller.js";
Stimulus.register("disable-button", DisableButtonController);
import SearchMoviesController from "./controllers/search_movies_controller.js";
Stimulus.register("search-movies", SearchMoviesController);

//  document.querySelector("tagHtml");
//   document.querySelector(".class");
// const button = document.querySelector("#click-me");
// console.log(button);

// button.addEventListener("click", (event) => {
//   console.log("du text");
//   console.log(event.currentTarget);
//   event.currentTarget.innerText = "Bingo !";
//   event.currentTarget.classList.remove("btn-primary");
//   event.currentTarget.classList.add("btn-danger");
// });
