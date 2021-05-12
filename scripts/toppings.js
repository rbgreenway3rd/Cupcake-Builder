import { getToppings, setTopping } from "./database.js";

const toppings = getToppings();

document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "toppingType") {
    setTopping(parseInt(changeEvent.target.value));
  }
});

export const Toppings = () => {
  let html = "<ul>";

  const toppingsHTMLInputElements = toppings.map((topping) => {
    return `
                <li>
                    <input type="radio" name="toppingType" value="${topping.id}" /> ${topping.name}
                </li>
            `;
  });

  const singleStringOfHTML = toppingsHTMLInputElements.join("");

  html += singleStringOfHTML;
  html += "</ul>";

  return html;
};
