import { Cakes } from "./cake-types.js";
import { Frostings } from "./frosting-flavors.js";
import { Toppings } from "./toppings.js";
import { PurchaseButton } from "./purchase-button.js";
import { CupcakeOrders } from "./cupcake-orders.js";

export const CupcakeBuilder = () => {
  return /*html*/ `
    <header class="header">
        <h1 class="title">Cupcake Builder</h1>
    </header>
    
    <article class="options">
        <section class="cake__options">
            <h2>Cake Types</h2>
            ${Cakes()}
            
        </section>
        <section class="frosting__options">
            <h2>Frosting Flavors</h2>
            ${Frostings()}

        </section>
        <section class="toppings__options">
            <h2>Toppings</h2>
            ${Toppings()}

        </section>
    </article>

    <article>
        ${PurchaseButton()}
    </article>
    
    <article class="cupcake__orders">
        <h3>Cupcakes</h3>
        ${CupcakeOrders()}
    </article>`;
};
