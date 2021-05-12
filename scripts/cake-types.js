import { getCakes, setCake } from "./database.js";

const cakes = getCakes();

document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "cakeType") {
    setCake(parseInt(changeEvent.target.value));
  }
});

export const Cakes = () => {
  let html = "<ul>";

  const cakeHTMLInputElements = cakes.map((cake) => {
    return `
                <li>
                    <input type="radio" name="cakeType" value="${cake.id}" /> ${cake.name}
                </li>
            `;
  });

  const singleStringOfHTML = cakeHTMLInputElements.join("");

  html += singleStringOfHTML;
  html += "</ul>";

  return html;
};
