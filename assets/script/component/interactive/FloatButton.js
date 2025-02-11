import { chevronUpIcon } from "../../content/graphic/icons.js";
import { createCustomElement } from "../../element/index.js";

export const FloatButton = (attribute = { link: "#", icon: chevronUpIcon }) => {
  const { link, icon } = attribute;
  return {
    element: createCustomElement("a", { class: "float-button", href: link }, [createCustomElement("i", { class: icon })]),
    ui: () => {},
  };
};
