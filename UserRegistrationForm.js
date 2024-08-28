import React, { useState } from "react";
import Input from "./Input";

const UserRegistrationForm = () => {
  const [formInputValues, setFormInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    file: "",
  });

  function handleChange(event) {
    let cpyFormValues = { ...formInputValues };
    cpyFormValues[event.target.name] = event.target.value;
    setFormInputValues(cpyFormValues);
  }
  return (
    <div>
      <h4>User Registration Form</h4>
      <form
        onSubmit={() => {
          // call register API using fetch
          // logic for saving the form data in DB using POST API
        }}
      >
        <Input
          value={formInputValues.firstName}
          name="firstName"
          labelName="First Name"
          inputType="text"
          handleChange={handleChange}
        />
        <Input
          value={formInputValues.lastName}
          name="lastName"
          labelName="Last Name"
          inputType="text"
          handleChange={handleChange}
        />
        <Input
          value={formInputValues.email}
          name="email"
          labelName="Email"
          inputType="email"
          handleChange={handleChange}
        />
        <Input
          value={formInputValues.mobile}
          name="mobile"
          labelName="Mobile"
          inputType="number"
          handleChange={handleChange}
        />
        <Input
          value={formInputValues.file}
          name="file"
          labelName="File"
          inputType="file"
          handleChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
