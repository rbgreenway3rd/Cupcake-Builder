import { addCupcakeOrder } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "purchase") {
    const cupcakePurchased = addCupcakeOrder();

    if (!cupcakePurchased) {
      window.alert("fill out order form");
    }
  }
});

export const PurchaseButton = () => {
  return /*html*/ `
        <button id="purchase">Purchase Cupcake</button>
        `;
};
