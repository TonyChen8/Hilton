export default class Staff {
    constructor({
        id = 0,
        name = "",
        title = "",
        description = "",
        image = "",
        schedule = [],
    }) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.image = image;
        this.schedule = [...schedule];
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
    getSchedule(all = true, day = 0) {
        return all ? this.schedule : this.schedule[day];
    }
    setSchedule(day = 0, select = true) {
        this.schedule[day] = select;
    }
}
