import { MainLayout } from "../layout/main.layout.js";
import { appendElement } from "../element/util.js";
import { Accordion, Products, Section, FloatButton } from "../component/index.js";
import { dataProduct } from "../content/index.js";

MainLayout(
  () => {
    const renderAccordions = [
      ...new Set(
        dataProduct.flatMap((product) => {
          if (typeof product.category === "string") {
            return product.category;
          } else if (Array.isArray(product.category)) {
            return product.category;
          }
        })
      ),
    ].sort().map((category) => {
      const { element, ui } = Products(dataProduct, { category: category, directLink: "" });
      return Accordion(category, category, element, ui);
    });

    const { element, ui } = Section(
      "products-list",
      "Our Products",
      renderAccordions.map(
        ({ element }) =>
          () =>
            element
      ),
      renderAccordions.map(({ ui }) => ui)
    );

    appendElement("main", element, ui);
  },
  () => {
    appendElement("footer", FloatButton({ link: "https://wa.me/", icon: "fa fa-comment" }).element);
  }
);
