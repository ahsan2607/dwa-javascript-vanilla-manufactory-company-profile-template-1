import { createCustomElement } from "../../element/index.js";

export const Services = (servicesData = []) => {
  return {
    element: createCustomElement(
      "div",
      { class: "services" },
      servicesData.map((service) =>
        createCustomElement("div", { class: "service-card" }, [
          createCustomElement("i", { class: `service-card__icon ${service.icon}` }),
          createCustomElement("h3", { class: "service-card__title", textContent: service.title }),
          createCustomElement("p", { class: "service-card__description", textContent: service.description }),
        ])
      )
    ),
    ui: () => {},
  };
};
