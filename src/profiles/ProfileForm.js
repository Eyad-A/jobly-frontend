import React, { useState, useContext } from "react";
import UserContext from "../auth/UserContext";
import JoblyApi from "../api/api";
import Alert from "../common/Alert";

/**
 * Profile Form 
 * Renders a form to edit the user's profile 
 * Routed at /profile 
 */

function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);

  // Handle form submit 
  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch (err) {
      setFormErrors(err);
      return;
    }

    setFormData(f => ({ ...f, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);

    setCurrentUser(updatedUser);
  }

  // Handle form change 
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }

  return (
    <div>
      <h1>Profile Form</h1>
      <div>
        <form>
          <div>
            <label>Username</label>
            <p>{formData.username}</p>
          </div>
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
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
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Confirm password to make changes</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {formErrors.length ?
            <Alert type="danger" message={formErrors} />
            : null
          }

          {saveConfirmed ?
            <Alert type="success" messages={["Update successful"]} />
            : null
          }

          <button onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;