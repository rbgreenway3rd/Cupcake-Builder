import { getFrostings, setFrosting } from "./database.js";

const frostings = getFrostings();

document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "frostingType") {
    setFrosting(parseInt(changeEvent.target.value));
  }
});

export const Frostings = () => {
  let html = "<ul>";

  const frostingHTMLInputElements = frostings.map((frosting) => {
    return `
                <li>
                    <input type="radio" name="frostingType" value="${frosting.id}" /> ${frosting.name}
                </li>
            `;
  });

  const singleStringOfHTML = frostingHTMLInputElements.join("");

  html += singleStringOfHTML;
  html += "</ul>";

  return html;
};
