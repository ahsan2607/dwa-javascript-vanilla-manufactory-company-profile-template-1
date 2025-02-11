const imageDirectory = (directory, image) => {
  return directory ? `./assets/images/${directory}/${image}` : `./assets/images/${image}`;
};

export const image = imageDirectory("", "image.png");
export const banner = imageDirectory("", "banner.jpg");
export const logo = imageDirectory("", "logo.png");
