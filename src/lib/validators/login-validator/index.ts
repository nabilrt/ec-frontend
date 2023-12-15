type LoginProps = {
  email: string;
  password: string;
};

const LoginValidator = (state: LoginProps) => {
  const { email, password } = state;

  const errors = {
    email: "",
    password: "",
  };

  if (email === "") {
    errors.email = "Email is required";
  }

  if (password === "") {
    errors.password = "Password is required";
  }

  return errors;
};

export default LoginValidator;

