import { MainLayout } from "../layout/main.layout.js";
import { appendElement } from "../element/index.js";
import { Contacts, Section, MessageForm, Map } from "../component/index.js";
import { dataContact } from "../content/index.js";

MainLayout(
  () => {
    const { element: elContacts, ui: uiContacts } = Contacts(dataContact.contactList);
    const { element, ui } = Section("contacts-list", "Our Contact", () => elContacts, uiContacts);
    appendElement("main", element, ui);
  },
  () => {
    const { element: elMessageForm, ui: uiMessageForm } = MessageForm();
    const { element, ui } = Section("message-form", "Contact Us", () => elMessageForm, uiMessageForm);
    appendElement("main", element, ui);
  },
  () => {
    appendElement("main", Map(dataContact.map).element);
  }
);
