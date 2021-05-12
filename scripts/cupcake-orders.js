import {
  getCakes,
  getToppings,
  getFrostings,
  getCupcakes,
} from "./database.js";

const cakes = getCakes();
const toppings = getToppings();
const frostings = getFrostings();

export const CupcakeOrders = () => {
  const orders = getCupcakes();

  const arrayOfCupcakeHTMLStrings = orders.map((order) => {
    let totalCost = 0;
    const foundCake = cakes.find((c) => c.id === order.cakeId);
    totalCost += foundCake.price;

    const foundTopping = toppings.find((t) => t.id === order.toppingId);
    totalCost += foundTopping.price;

    const foundFrosting = frostings.find((f) => f.id === order.frostingId);
    totalCost += foundFrosting.price;

    return `
        <div class = "order">
            Cupcake #${order.id} cost $${totalCost.toFixed(2)}
        </div> `;
  });

  const html = arrayOfCupcakeHTMLStrings.join("");

  return html;
};
