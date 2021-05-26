export default class Staff {
  constructor({ id = 0, name = "", title = "", description = "", image = "" }) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.description = description;
    this.image = image;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name || " ";
  }
  getTitle() {
    return this.title || " ";
  }
  getDescription() {
    return this.description;
  }
  getImage(path = false) {
    return path ? `/bosco/${this.image}` : this.image;
  }
}
