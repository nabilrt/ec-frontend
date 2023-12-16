"use client";
import EyeOff from "@/lib/icons/eye-off";
import Eye from "@/lib/icons/eye-on";
import { INITIALSTATE, loginReducer } from "@/lib/reducers/login-reducer";
import LoginValidator from "@/lib/validators/login-validator";
import Button from "@/modules/button";
import Input from "@/modules/input";
import Link from "next/link";
import { useReducer, useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatch] = useReducer(loginReducer, INITIALSTATE);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const LoginHandler = (e: any) => {
    e.preventDefault();
    const err = LoginValidator(state);
    if (err.email !== "" || err.password !== "") {
      setErrors(err);
    } else {
      alert("Login Successful");
    }
  };
  return (
    <div className="p-4 w-full flex flex-wrap justify-center">
      <div className="flex flex-col p-4">
        <img src="/login.gif" alt="" />
      </div>
      <div className="w-1/2 flex flex-col  p-7 shadow-lg rounded-md items-start mt-28">
        <div className="mt-9">
          <h3 className="font-semibold text-2xl mb-2">Welcome Back!</h3>
          <small className="font-light text-sm">Login to continue</small>
        </div>
        <form action="" method="post" className="w-2/3 space-y-3 mt-5">
          <div className="flex flex-row  space-x-2 w-[70%]">
            <Input
              placeholder="Email"
              type="text"
              className="py-4 "
              name="email"
              value={state.email}
              onFocus={() => {
                errors.email &&
                  setErrors({
                    ...errors,
                    email: "",
                  });
              }}
              onChange={(e) => {
                dispatch({
                  type: "INPUT_CHANGE",
                  payload: {
                    name: e.target.name,
                    value: e.target.value,
                  },
                });
              }}
            />
          </div>
          {errors.email !== "" && (
            <div className="flex flex-col text-sm space-y-9  text-red-600">
              <p>{errors.email}</p>
            </div>
          )}
          <div className="flex flex-row  space-x-2 w-3/4">
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              onFocus={() => {
                errors.password &&
                  setErrors({
                    ...errors,
                    password: "",
                  });
              }}
              value={state.password}
              onChange={(e) => {
                dispatch({
                  type: "INPUT_CHANGE",
                  payload: {
                    name: e.target.name,
                    value: e.target.value,
                  },
                });
              }}
              className="py-4  "
            />
            <span
              className="m-auto cursor-pointer "
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <Eye color="#fc8eac" />
              ) : (
                <EyeOff color="#fc8eac" />
              )}
            </span>
          </div>
          {errors.password !== "" && (
            <div className="flex flex-col text-sm space-y-9  text-red-600">
              <p>{errors.password}</p>
            </div>
          )}
          <div className="flex flex-row w-full space-x-2">
            <Button variant="secondary" onClick={(e) => LoginHandler(e)}>
              Login
            </Button>
            <a href="" className="m-auto text-sm hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>
        <div className="flex flex-row w-full space-x-2 mt-4">
          <p>
            New User?{" "}
            <Link
              href="/sign-up"
              className="m-auto  hover:underline text-[#fc8eac]"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
