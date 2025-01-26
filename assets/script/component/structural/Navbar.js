import { createCustomElement } from "../../element/index.js";

export const Navbar = (navs = [], attribute = { logo: "", name: "" }) => {
  const { logo, name } = attribute;
  return {
    element: createCustomElement("nav", { id: "header_navigation" }, [
      createCustomElement("div", { id: "header_navigation-brand" }, [
        createCustomElement("img", { loading: "lazy", src: logo, alt: "" }),
        name ? createCustomElement("strong", { textContent: name }) : null,
      ]),
      createCustomElement("div", { id: "header_navigation-menu" }, [createCustomElement("i", { id: "header_navigation-menu-button", class: "fa fa-list-ul" })]),
      createCustomElement("div", { id: "header_navigation-links" }, [
        createCustomElement(
          "ul",
          {},
          navs.map((link) => createCustomElement("li", {}, [createCustomElement("a", { href: link.link, textContent: link.text })]))
        ),
      ]),
    ]),
    ui: () => {
      const headerNavigationLinks = document.getElementById("header_navigation-links");
      const headerNavigationBrand = document.getElementById("header_navigation-brand");
      const headerNavigationMenuButton = document.getElementById("header_navigation-menu-button");

      const responsiveMenu = () => {
        if (window.innerWidth < 769) {
          headerNavigationLinks.classList.add("header_navigation-hide_element");
          headerNavigationBrand.classList.add("header_navigation-hide_element");
        } else {
          headerNavigationLinks.classList.remove("header_navigation-hide_element");
          headerNavigationBrand.classList.remove("header_navigation-hide_element");
        }
      };

      const toggleMenu = () => {
        headerNavigationLinks.classList.toggle("header_navigation-hide_element");
        headerNavigationMenuButton.classList.toggle("fa-list-ul");
        headerNavigationMenuButton.classList.toggle("fa-chevron-up");
      };

      window.addEventListener("resize", responsiveMenu);
      window.addEventListener("load", responsiveMenu);
      headerNavigationMenuButton.addEventListener("click", toggleMenu);
    },
  };
};
