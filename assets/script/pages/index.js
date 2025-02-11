import { MainLayout } from "../layout/main.layout.js";
import { appendElement } from "../element/index.js";
import { Navbar, Hero, BannerCarousel, Abouts, Products, MessageForm, Section, FloatButton } from "../component/index.js";
import { dataHeaderNavigation, dataHeaderBanner, dataHeaderCarousel, dataAbout, dataProduct } from "../content/index.js";
import { whatsappIcon } from "../content/graphic/icons.js";

MainLayout(
  // () => {
  //   const { element, ui } = BannerCarousel(dataHeaderCarousel, {
  //     headerNavigationId: Navbar(dataHeaderNavigation.links, dataHeaderNavigation.logo, dataHeaderNavigation.name).element.id,
  //     autoPlay: true,
  //     interval: 3000,
  //   });
  //   appendElement("header", element, ui);
  // },
  () => {
    const renderHero = Hero({
      title: dataHeaderBanner.title,
      desc: dataHeaderBanner.desc,
      bgImg: "./assets/images/banner.jpg",
      headerNavigationId: Navbar(dataHeaderNavigation.links, dataHeaderNavigation.logo, dataHeaderNavigation.name).element.id,
    });
    appendElement("header", renderHero.element, renderHero.ui);
  },
  () => {
    const { element: elProducts, ui: uiProducts } = Products(dataProduct, { isFeatured: true, directLink: "product.html", additionalClassList: "container" });
    const { element, ui } = Section("featured-products-list", "Featured Products", () => elProducts, uiProducts);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elAbouts, ui: uiAbouts } = Abouts(
      dataAbout.filter(({}, index) => index < 1),
      { withButton: true }
    );
    const { element, ui } = Section("highligthed-abouts", "About Us", () => elAbouts, uiAbouts);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elMessageForm, ui: uiMessageForm } = MessageForm();
    const { element, ui } = Section("message-form", "Contact Us", () => elMessageForm, uiMessageForm);
    appendElement("main", element, ui);
  },
  () => {
    appendElement("footer", FloatButton({link: "https://wa.me/", icon: whatsappIcon}).element)
  }
);
