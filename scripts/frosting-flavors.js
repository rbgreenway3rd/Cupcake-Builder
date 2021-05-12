import { getFrostings } from "./database.js";

const frostings = getFrostings();

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
