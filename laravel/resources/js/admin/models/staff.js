export default class Staff {
  constructor({ title = "", description = "", image = "" }) {
    this.title = title;
    this.description = description;
    this.image = image;
  }

  getTitle() {
    return this.title || " ";
  }
  getDescription() {
    return this.description;
  }
  getImage() {
    return this.image;
  }
}
