const database = {
  cakeTypes: [
    {
      id: 1,
      name: "Chocolate",
      price: 7.5,
    },
    {
      id: 2,
      name: "Carrot",
      price: 4.5,
    },
    {
      id: 3,
      name: "Red Velvet",
      price: 6.0,
    },
    {
      id: 4,
      name: "Lemon",
      price: 4.5,
    },
    {
      id: 5,
      name: "Tres Leches",
      price: 5.5,
    },
  ],
  frostingFlavors: [
    {
      id: 1,
      name: "Chocolate",
      price: 0.5,
    },
    {
      id: 2,
      name: "Vanilla",
      price: 0.5,
    },
  ],
  toppings: [
    {
      id: 1,
      name: "sprinkles",
      price: 0.5,
    },
    {
      id: 2,
      name: "chocolate drizzle",
      price: 1.0,
    },
    {
      id: 3,
      name: "caramel",
      price: 1.5,
    },
  ],
  cupcakes: [],
  cupcakeBuilder: {},
};

export const getCakes = () => {
  return [...database.cakeTypes];
};

export const getFrostings = () => {
  return [...database.frostingFlavors];
};

export const getToppings = () => {
  return [...database.toppings];
};
