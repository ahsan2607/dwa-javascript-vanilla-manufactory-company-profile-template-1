import { createCustomElement } from "../../element/index.js";

export const BannerCarousel = (slides = [], attribute = { headerNavigationId: "", autoPlay: true, interval: 3000 }) => {
  const { headerNavigationId, autoPlay, interval } = attribute;
  const carouselInner = createCustomElement("div", { class: "carousel-inner" });
  const indicators = createCustomElement("div", { class: "carousel-indicators" });

  let currentIndex = 0;
  let autoSlideInterval;

  slides.forEach((item, index) => {
    const slide = createCustomElement(
      "div",
      {
        class: `carousel-item ${index === 0 ? "active" : ""}`,
        style: `background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${item.image}")`,
      },
      [
        createCustomElement("div", {}, [
          createCustomElement("h2", { textContent: item.title }),
          item.subtitle ? createCustomElement("em", { textContent: item.subtitle }) : null,
        ]),
      ]
    );
    carouselInner.appendChild(slide);

    const indicator = createCustomElement("span", {
      class: `carousel-indicator ${index === 0 ? "active" : ""}`,
      "data-slide-to": index,
    });
    indicator.addEventListener("click", () => {
      goToSlide(index);
      resetAutoSlide();
    });
    indicators.appendChild(indicator);
  });

  const prevButton = createCustomElement("button", { class: "carousel-arrow carousel-arrow--left", "aria-label": "Previous" }, [
    createCustomElement("i", { class: "fa fa-chevron-left" }),
  ]);
  
  const nextButton = createCustomElement("button", { class: "carousel-arrow carousel-arrow--right", "aria-label": "Next" }, [
    createCustomElement("i", { class: "fa fa-chevron-right" }),
  ]);

  prevButton.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
    resetAutoSlide();
  });

  nextButton.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
    resetAutoSlide();
  });

  const goToSlide = (index) => {
    const items = carouselInner.children;
    const dots = indicators.children;

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
      dots[i].classList.remove("active");
    }

    currentIndex = (index + slides.length) % slides.length;

    items[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");

    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const autoSlide = () => {
    if (autoPlay) {
      autoSlideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, interval);
    }
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlide();
  };

  autoSlide();

  return {
    element: createCustomElement("div", { id: "header-carousel", class: "carousel" }, [
      prevButton,
      carouselInner,
      nextButton,
      indicators,
    ]),
    ui: () => {
      document.querySelectorAll(".carousel-item.active").forEach((element) => {
        element.style.minHeight = headerNavigationId
          ? Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - document.getElementById(headerNavigationId).clientHeight + "px"
          : Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) + "px";
        element.style.maxHeight = headerNavigationId
          ? Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - document.getElementById(headerNavigationId).clientHeight + "px"
          : Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) + "px";
      });
    },
  };
};
