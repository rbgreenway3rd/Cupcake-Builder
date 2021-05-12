import { CupcakeBuilder } from "./Cupcake-Builder.js";

const main = document.querySelector("#container");

const renderAllHTML = () => {
  main.innerHTML = CupcakeBuilder();
};

renderAllHTML();

document.addEventListener("stateChanged", (event) => {
  console.log("hello world");
  renderAllHTML();
});
