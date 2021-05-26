const reducer = (state = {}, action) => {
  switch (action.type) {
    case "select.staff":
      return {
        ...state,
        selectedStaff: action.data.staff,
      };
    default:
      return state;
  }
};

export default reducer;
