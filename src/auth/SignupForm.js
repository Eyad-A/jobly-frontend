import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/**
 * Signup form 
 * Shows a sign up form
 * Routed at /signup  
 */

function SignupForm({ signup }) {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  // Handle submit 
  async function handleSubmit(evt) {
    evt.preventDefault();
    let results = await signup(formData);
    if (results.success) {
      history.push("/companies");
    } else {
      setFormErrors(results.errors);
    }
  }

  // Handle change
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <div>
      <div>
        <h1>Signup Form</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}              
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>First name</label>
            <input
              name="firstName"              
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              name="lastName"              
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"              
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;