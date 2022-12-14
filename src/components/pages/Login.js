import React, { useState } from "react";
import useForm from "react-hook-form";
// import "./styles/main.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const eye = <FontAwesomeIcon icon="fa-solid fa-eye" />;

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="Login">
      <input
        name="username"
        type="text"
        placeholder="Username"
        ref={register({ required: true, maxLength: 20 })}
      />{" "}
      <div className="pass-wrapper">
        {" "}
        <input
          placeholder="Password"
          name="password"
          type={passwordShown ? "text" : "password"}
          ref={register({ required: "Must enter a password" })}
        />
        <i onClick={togglePasswordVisibility}>{eye}</i>{" "}
      </div>
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        submit
      </button>
    </div>
  );
}
