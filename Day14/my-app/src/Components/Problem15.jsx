import React from "react";
import useForm from "./customHooks/useForm";


function Problem15() {
  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email required";
    if (!values.password) errors.password = "Password required";
    if (values.password && values.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    validate
  );

  const submitForm = () => alert(`Form submitted with: ${JSON.stringify(values)}`);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Problem15;