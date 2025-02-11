const faIcon = (iconClass) => {
  return `fa fa-${iconClass.toLowerCase()}`;
};

const faBrand = (iconClass) => {
  return `fa-brands fa-${iconClass.toLowerCase()}`;
};

export const whatsappIcon = faBrand("whatsapp");
export const menuIcon = faIcon("list-ul");
export const chevronUpIcon = faIcon("chevron-up");
export const chevronDownIcon = faIcon("chevron-down");
export const phoneIcon = faIcon("phone");
export const emailIcon = faIcon("envelope");
export const faxIcon = faIcon("fax");
export const mapIcon = faIcon("map-marker-alt");
export const cogsIcon = faIcon("cogs");
export const shieldIcon = faIcon("shield-alt");
export const rocketIcon = faIcon("rocket");
export const chatBubbleIcon = faIcon("comment");

export const iconPlaceholder1 = faIcon("circle");
export const iconPlaceholder2 = faIcon("square");
export const iconPlaceholder3 = faIcon("diamond");