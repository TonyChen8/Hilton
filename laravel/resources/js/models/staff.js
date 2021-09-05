import moment from "moment";

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
    if (schedule && schedule.staff_id > 0) {
      // data from api
      const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
      this.schedule = days.map((day) => parseInt(schedule[day]));
    } else {
      this.schedule = this.schedule ? [...schedule] : [];
    }
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
    return path ? `/bosco/whoson/${this.image}` : this.image;
  }

  getDaySchedule(day = 0) {
    // if value is 1, means day shift.
    return this.schedule[day] % 10 > 0;
  }

  getNightSchedule(day = 0) {
    // if value is 10, means night shift.
    return parseInt(this.schedule[day] / 10) > 0;
  }

  getSchedule(day = 0) {
    return this.schedule[day];
  }

  setSchedule(day = 0, shift = 1) {
    // use bit to mark day or night shift. 1 day shift. 10 night shift. 0 don't work
    switch (shift) {
      case 1:
        this.schedule[day] % 10
          ? (this.schedule[day] -= shift)
          : (this.schedule[day] += shift);
        break;
      case 10:
        parseInt(this.schedule[day] / 10)
          ? (this.schedule[day] -= shift)
          : (this.schedule[day] += shift);
        break;
    }
  }

  isDayShift(day = null) {
    let shiftDay = day ? moment(day).format("e") : moment().format("e");
    const days = [6, 0, 1, 2, 3, 4, 5];

    return this.schedule[days[shiftDay]] % 10 > 0;
  }

  isNightShift(day = null) {
    let shiftDay = day ? moment(day).format("e") : moment().format("e");
    const days = [6, 0, 1, 2, 3, 4, 5];

    return parseInt(this.schedule[days[shiftDay]] / 10) > 0;
  }
}
