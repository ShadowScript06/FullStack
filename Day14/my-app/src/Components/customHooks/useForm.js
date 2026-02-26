import { useState } from "react";

function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (callback) => (event) => {
    if (event) event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    // Call callback only if no errors
    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;



