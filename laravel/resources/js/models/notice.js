export default class Notice {
  constructor({
    id = 0,
    title = "",
    description = "",
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  getId() {
    return this.id;
  }
  getTitle() {
    return this.title || " ";
  }
  getDescription() {
    return this.description;
  }
}
