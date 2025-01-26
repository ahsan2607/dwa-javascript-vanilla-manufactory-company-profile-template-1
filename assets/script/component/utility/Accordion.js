import { createCustomElement } from "../../element/index.js";

export const Accordion = (id, title, childElement, childUIFunction) => {
  const icon = createCustomElement("i", { class: "fa fa-chevron-up" });
  const header = createCustomElement(
    "button",
    {
      class: "accordion-header",
      "aria-expanded": "true",
    },
    [createCustomElement("p", { class: "accordion-header__text", textContent: title }), createCustomElement("div", { class: "accordion-header__icon" }, [icon])]
  );
  const content = createCustomElement("div", { class: "accordion-content", style: "display: block" }, [childElement]);
  return {
    element: createCustomElement("div", { id: id, class: "accordion container" }, [header, content]),
    ui: () => {
      header.addEventListener("click", () => {
        const isExpanded = header.getAttribute("aria-expanded") === "true";
        header.setAttribute("aria-expanded", !isExpanded);
        icon.className = isExpanded ? "fa fa-chevron-down" : "fa fa-chevron-up";
        content.style.display = isExpanded ? "none" : "block";
      });
      childUIFunction();
    },
  };
};
