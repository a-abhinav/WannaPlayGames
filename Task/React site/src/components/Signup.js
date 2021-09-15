import React from "react";
import "../App.css";
import { useState } from "react";
import Carousal from "./Carousal";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    gender: "",
    address: "",
    email: "",
    contact: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="signup">
      <Carousal />
      <h1>For Signing-up, please fill up this form!</h1>
      <div className="formWrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formData);
          }}
        >
          <h3>* marked field are required to be field.</h3>
          <label className="label">
            Name<span>*</span>
          </label>
          <input
            required
            className="input"
            name="name"
            type="text"
            onChange={handleChange}
            value={formData.name}
          ></input>
          <br></br>

          <label className="label">
            Birthdate<span>*</span>
          </label>
          <input
            required
            type="date"
            name="birthdate"
            onChange={handleChange}
            className="input"
            value={formData.birthdate}
          ></input>
          <br></br>

          <label className="label">Gender</label>
          <input
            required
            type="text"
            name="gender"
            onChange={handleChange}
            value={formData.gender}
            className="input"
          ></input>
          <br></br>

          <label className="label">
            Address<span>*</span>
          </label>
          <input
            required
            name="address"
            type="text"
            onChange={handleChange}
            className="input"
            value={formData.address}
          ></input>
          <br></br>

          <label className="label">
            E-mail<span>*</span>
          </label>
          <input
            required
            name="email"
            type="email"
            onChange={handleChange}
            className="input"
            value={formData.email}
          ></input>
          <br></br>

          <label className="label">
            Contact<span>*</span>
          </label>
          <input
            required
            name="contact"
            type="text"
            onChange={handleChange}
            className="input"
            value={formData.contact}
          ></input>
          <br></br>

          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
