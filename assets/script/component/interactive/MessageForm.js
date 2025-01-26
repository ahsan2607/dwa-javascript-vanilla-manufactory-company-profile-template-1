import { createCustomElement } from "../../element/index.js";

export const MessageForm = () => {
  return {
    element: createCustomElement("form", { id: "input_mail", class: "mail-input container", action: "", target: "__blank" }, [
        createCustomElement("input", {
          id: "input-mail-name",
          type: "text",
          placeholder: "Masukkan Nama...",
        }),
        createCustomElement("input", {
          id: "input-mail-comefrom",
          type: "text",
          placeholder: "Masukkan Asal...",
        }),
        createCustomElement("textarea", {
          id: "input-mail-text",
          name: "",
          placeholder: "Masukkan Teks...",
        }),
        createCustomElement("button", {
          id: "input-mail-submit",
          class: "button",
          type: "submit",
          textContent: "Kirim",
        }),
      ]),
    ui: () => {
      document.getElementById("input_mail").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("input-mail-name").value.split(" ").join("%20");
        const comefrom = document.getElementById("input-mail-comefrom").value.split(" ").join("%20");
        const text = document.getElementById("input-mail-text").value.split(" ").join("%20");

        window.open(`https://wa.me/6287832943330?text=Hi,%20I'm%20${name}%20from%20${comefrom}.%20${text}`, "_blank");
      });
    },
  };
};
