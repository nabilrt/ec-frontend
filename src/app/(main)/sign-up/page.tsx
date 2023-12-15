"use client";
import EmailIcon from "@/lib/icons/email";
import KeyIcon from "@/lib/icons/key";
import PasswordIcon from "@/lib/icons/pass";
import UserCircleIcon from "@/lib/icons/user-circle";
import UserIcon from "@/lib/icons/user-icon";
import { INITIALSTATE, signUpReducer } from "@/lib/reducers/sign-up-reducer";
import SignUpValidator from "@/lib/validators/sign-up-validator";
import Button from "@/modules/button";
import Input from "@/modules/input";
import SignUpSuccess from "@/modules/sign-up-success";
import Link from "next/link";
import { useReducer, useState } from "react";

const SignUp = () => {
  const [state, dispatch] = useReducer(signUpReducer, INITIALSTATE);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);

  const SignUpClick = (e: any) => {
    e.preventDefault();
    const err = SignUpValidator(state);

    if (
      err.name !== "" ||
      err.email !== "" ||
      err.password !== "" ||
      err.confirmPassword !== ""
    ) {
      setErrors(err);
    } else {
      setIsSignUpSuccessful(true);
    }
  };

  return (
    <div className="p-4 flex flex-wrap w-full justify-center">
      {isSignUpSuccessful ? (
        <SignUpSuccess avatarLink={"/avatar.png"} />
      ) : (
        <div className="w-1/2 flex flex-col  p-4 shadow-lg rounded-md">
          <form action="" className="w-2/4 space-y-3 m-auto">
            <div className="flex flex-col space-y-3 text-center">
              <h3 className="font-semibold text-2xl">Welcome to EC Commerce</h3>
              <small className="font-light text-sm">
                Join us to shop all your needs
              </small>
            </div>
            <div className="flex flex-row w-full space-x-2">
              <span className="m-auto">
                <UserIcon />
              </span>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={state.name}
                onFocus={() => {
                  errors.name &&
                    setErrors({
                      ...errors,
                      name: "",
                    });
                }}
                onChange={(e) => {
                  dispatch({
                    type: "INPUT_CHANGE",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
              />
            </div>
            {errors.name !== "" && (
              <div className="flex flex-col text-sm space-y-9 pl-7 text-red-600">
                <p>{errors.name}</p>
              </div>
            )}
            <div className="flex flex-row w-full space-x-2">
              <span className="m-auto">
                <EmailIcon />
              </span>
              <Input
                type="text"
                placeholder="Email"
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
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
              />
            </div>
            {errors.email !== "" && (
              <div className="flex flex-col text-sm space-y-9 pl-7 text-red-600">
                <p>{errors.email}</p>
              </div>
            )}

            <div className="flex flex-row space-x-2 w-full">
              <span className="m-auto">
                <PasswordIcon />
              </span>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={state.password}
                onFocus={() => {
                  errors.password &&
                    setErrors({
                      ...errors,
                      password: "",
                    });
                }}
                onChange={(e) => {
                  dispatch({
                    type: "INPUT_CHANGE",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
              />
            </div>
            {errors.password !== "" && (
              <div className="flex flex-col text-sm space-y-9 pl-7 text-red-600">
                <p>{errors.password}</p>
              </div>
            )}

            <div className="flex flex-row w-full space-x-2">
              <span className="m-auto">
                <KeyIcon />
              </span>
              <Input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onFocus={() => {
                  errors.confirmPassword &&
                    setErrors({
                      ...errors,
                      confirmPassword: "",
                    });
                }}
                value={state.confirmPassword}
                onChange={(e) => {
                  dispatch({
                    type: "INPUT_CHANGE",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
              />
            </div>
            {errors.confirmPassword !== "" && (
              <div className="flex flex-col text-sm space-y-9 pl-7 text-red-600">
                <p>{errors.confirmPassword}</p>
              </div>
            )}

            <div className="flex flex-row w-full space-x-2">
              <span className="m-auto">
                <UserCircleIcon />
              </span>
              <Input
                type="file"
                placeholder="Profile Picture"
                name="picture"
                onChange={(e) => {
                  dispatch({
                    type: "PICTURE_CHANGE",
                    payload: { name: e.target.name, files: e.target.files },
                  });
                }}
              />
            </div>
            <div>
              <Button className="w-full" onClick={(e) => SignUpClick(e)}>
                REGISTER
              </Button>
            </div>
            <div>
              <p className="text-center font-semibold">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-cyan-700 hover:text-cyan-800 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}

      <div className="w-1/2 flex flex-col p-4">
        <img src="/signup.gif" alt="" className="w-full h-auto m-auto" />
      </div>
    </div>
  );
};
export default SignUp;
