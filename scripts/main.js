import { CupcakeBuilder } from "./Cupcake-Builder.js";

const main = document.querySelector("#container");

const renderAllHTML = () => {
  main.innerHTML = CupcakeBuilder();
};

renderAllHTML();

document.addEventListener("stateChanged", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  renderAllHTML();
});
