import React, { useState, Fragment } from "react";
import useError from "../hooks/useError";
import getRejex from "../utils/rejex";
import userservices from "../services/user";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    isBiz: false,
  });
  const [isChecked, setIsChecked] = useState(false);
  const { error, handleError } = useError(false);
  const [apiMessage, setapiMessage] = useState("");
  const emailRejex = getRejex("EMAIL");
  const passwordRejex = getRejex("PASSWORD");

  const validateForm = () => {
    let error = false;
    for (const [key, value] of new Map(Object.entries(credentials))) {
      const booleancondition = typeof value !== "boolean";

      if (!value && booleancondition) {
        error = true;
        handleError(`${[key]} is required`, [key]);
      } else if (key.includes("email") && !emailRejex.test(value)) {
        handleError(`${[key]} is invalid `, [key]);
      } else if (key.includes("password") && !passwordRejex.test(value)) {
        handleError(`${[key]} must be between 6 and 150 characters `, [key]);
      }
    }
    return error;
  };
  const validateFeilds = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (!value) {
      handleError(`${name} is required`, name);
    } else if (name.includes("email") && !emailRejex.test(value)) {
      handleError(`${name} is invalid`, name);
    } else if (name.includes("password") && !passwordRejex.test(value)) {
      handleError(`${name} must be between 6 and 150 characters`, name);
    } else if (value.length < 2) {
      handleError(`${name} must be atleast 2 characters long`, name);
    } else if (value.length > 150) {
      handleError(`${name} cannot be more than 150 characters long`, name);
    } else {
      handleError(null, name);
    }
  };

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    e.target.type === "checkbox"
      ? setCredentials((prev) => ({ ...prev, [e.target.name]: !isChecked }))
      : setCredentials((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
    validateFeilds(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      return;
    }

    const payload = {
      ...credentials,
      name: credentials.name.trim(),
      email: credentials.email.trim(),
      password: credentials.password.trim(),
    };
    try {
      const response = await userservices.signup(payload);
      setapiMessage(response.data);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setapiMessage(error.response.data);
      }
    }
  };

  const getUppercase = (name) => {
    return name?.charAt(0)?.toUpperCase() + name?.slice(1);
  };

  const fields = new Map(Object.entries(credentials));
  const types = (...data) => {
    const options = new Map([...data]);

    return options;
  };
  const inputType = (key, data) => {
    return data.get(key) || "text";
  };
  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        {Array.from(fields).map(([key, value]) => (
          <Fragment key={key}>
            <label>{key}:</label>
            <br />
            <input
              type={inputType(
                key,
                types(["isBiz", "checkbox"], ["password", "password"])
              )}
              placeholder={`Enter ${key}`}
              name={key}
              onChange={handleChange}
              value={value}
              onFocus={() => handleError(null, [key])}
              checked={isChecked}
            />
            <br />
            {error && <span> {error[key] && getUppercase(error[key])}</span>}
            <br />
          </Fragment>
        ))}

        <button type="submit">Submit</button>
        <br />
        {apiMessage && (
          <span style={{ fontsize: "25px", color: "blue" }}> {apiMessage}</span>
        )}
      </form>
    </>
  );
};

export default Register;
