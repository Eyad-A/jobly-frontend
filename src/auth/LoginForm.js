import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/** Login form
 * Shows a login form 
 * Routed at /login 
 */

function LoginForm({ login }) {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  // Handle form submission 
  async function handleSubmit(evt) {
    evt.preventDefault();
    let results = await login(formData);
    if (results.success) {
      history.push("/companies");
    } else {
      setFormErrors(results.errors);
    }
  }

  // Handle change function 
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(d => ({ ...d, [name]: value }));
  }

  return (
    <div>
      <div>
        <h1>Login Form</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
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

export default LoginForm;