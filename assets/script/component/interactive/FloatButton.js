import { createCustomElement } from "../../element/index.js";

export const FloatButton = (attribute = { link: "#header", icon: "fa fa-chevron-up" }) => {
  const { link, icon } = attribute;
  return {
    element: createCustomElement("a", { class: "float-button", href: link }, [createCustomElement("i", { class: icon })]),
    ui: () => {},
  };
};
