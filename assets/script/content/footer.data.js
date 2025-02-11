import { phoneIcon, emailIcon, mapIcon } from "./graphic/icons.js";

export const dataFooter = {
  contact: {
    title: "Contacts",
    list: [
      {
        icon: phoneIcon,
        title: "Phone",
        content: "022-XXXXXXX / 022-XXXXXXX",
      },
      {
        icon: emailIcon,
        title: "Email",
        content: "ouremail1@yahoo.com / ouremail2@gmail.com",
      },
      {
        icon: mapIcon,
        title: "Address",
        content: "One town, On City, That Province, This Country",
      },
    ],
  },
  link: {
    title: "Link",
    list: [
      { href: "./index.html", text: "Home" },
      { href: "./about.html", text: "About Us" },
      { href: "./product.html", text: "Products" },
      { href: "./contact.html", text: "Contacts" },
    ],
  },
  copyright: "All right reserved. Made with interest",
};
