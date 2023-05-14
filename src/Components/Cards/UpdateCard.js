import React, { useState, Fragment } from "react";
import useError from "../../hooks/useError";
import { useNavigate } from "react-router-dom";
import useBusiness from "../../hooks/useBusiness";

const CapitalLetter = (str) => {
  const text = str.charAt(0).toUpperCase() + str.slice(1);
  return text;
};

const UpdateCard = ({ closeFormModal }) => {
  const { update, editCard } = useBusiness();
  const { bizName, bizDescription, bizAddress, bizPhone, bizImage } = editCard;
  const [credentials, setCredentials] = useState({
    bizName: bizName,
    bizDescription: bizDescription,
    bizAddress: bizAddress,
    bizPhone: bizPhone,
    bizImage: bizImage,
  });

  // const [isChecked, setIsChecked] = useState(false);
  const { error, handleError } = useError(false);
  const [apiMessage, setapiMessage] = useState("");
  // const emailRejex = getRejex("EMAIL");
  //const passwordRejex = getRejex("PASSWORD");
  const navigate = useNavigate();

  const validateForm = () => {
    let error = false;
    for (const [key, value] of new Map(Object.entries(credentials))) {
      if (!value) {
        error = true;
        handleError(`${[key]} is required`, [key]);
      }
    }
    return error;
  };
  const validateFeilds = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (!value) {
      handleError(`${name} is required`, name);
    } else if (value.length < 2) {
      handleError(`${name} must be atleast 2 characters long`, name);
    } else if (value.length > 150) {
      handleError(`${name} cannot be more than 150 characters long`, name);
    } else {
      handleError(null, name);
    }
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({
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

    try {
      const response = await update({ _id: editCard._id, ...credentials });
      setapiMessage(response.data);
      // navigate("/dashboard");
      closeFormModal();
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
            <label>{CapitalLetter(key)}:</label>
            <br />
            <input
              type={inputType(key, types())}
              placeholder={`Enter ${key}`}
              name={key}
              onChange={handleChange}
              defaultValue={value}
              onFocus={() => handleError(null, [key])}
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

export default UpdateCard;
