import faker from "faker";

import getMockContext from "./utils/mockContext";

const mount = (el, context) => {
  console.log("Mounted Products !!");
  let products = `<h3>Rendered from Producs Sub-App !!</h3><br/>`;
  products +=
    "Theme set in context is " +
    `<b>` +
    context.misc.theme +
    `</b>` +
    `<br/>` +
    "Font Size set in context is " +
    `<b>` +
    context.misc.fontSize +
    `</b>` +
    `<br/><br/>` +
    "Products:";

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  const cartMockContext = getMockContext();
  if (el) {
    mount(el, cartMockContext);
  }
}

export { mount };
