import { MainLayout } from "../layout/main.layout.js";
import { appendElement } from "../element/index.js";
import { Abouts, Services, Section, FloatButton } from "../component/index.js";
import { dataAbout, dataService } from "../content/index.js";

MainLayout(
  () => {
    const { element: elAbouts, ui: uiAbouts } = Abouts(dataAbout);
    const { element, ui } = Section("abouts-list", "About Us", () => elAbouts, uiAbouts);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elServices, ui: uiServices } = Services(dataService);
    const { element, ui } = Section("services-list", "Our Services", () => elServices, uiServices);
    appendElement("main", element, ui);
  },
  () => {
    appendElement("footer", FloatButton({ link: "https://wa.me/", icon: "fa fa-comment" }).element);
  }
);
