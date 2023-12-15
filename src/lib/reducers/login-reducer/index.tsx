export const INITIALSTATE = {
  email: "",
  password: "",
};

export const loginReducer = (state = INITIALSTATE, action: any) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
