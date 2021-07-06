import Notice from "../../models/notice";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "select.notice":
      return {
        ...state,
        selectedNotice: new Notice(action.data.notice || {}),
      };
    case "set.notices":
      return {
        ...state,
        notices: (action.data.notices || [{}]).map((item) => new Notice(item)),
      };
    default:
      return state;
  }
};

export default reducer;
