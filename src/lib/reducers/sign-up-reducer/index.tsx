export const INITIALSTATE = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  picture: null,
};

export const signUpReducer = (state = INITIALSTATE, action: any) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "PICTURE_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.files[0],
      };
    default:
      return state;
  }
};
