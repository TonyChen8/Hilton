import Staff from "../../models/staff";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "select.staff":
      return {
        ...state,
        selectedStaff: new Staff(action.data.staff || {}),
      };
    case "set.staffs":
      return {
        ...state,
        staffs: (action.data.staffs || [{}]).map((item) => new Staff(item)),
      };
    default:
      return state;
  }
};

export default reducer;
