import { useState } from "react";

const useError = (initial) => {
  const [error, setError] = useState(false);

  const handleError = (message, input) => {
    setError((prevError) => ({ ...prevError, [input]: message }));
  };
  return { error, handleError };
};

export default useError;
