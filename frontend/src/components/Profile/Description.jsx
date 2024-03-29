import React, { useState } from "react";
import "./Description.scss";
import { useAppState } from "../../AppState.jsx";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar.jsx";

//Description page for user to fill out after signing up
const Description = (props) => {
  const { state } = useAppState();

   //Get logged in user details - To revisit when useAppState is fixed
  const userID = JSON.parse(window.localStorage.getItem("auth")).id;
  const isCaregiver = JSON.parse(
    window.localStorage.getItem("auth")
  ).isCaregiver;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    description: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //Change to axios request after demo day
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${state.url}/users/${userID}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: formData }),
    })
      .then((response) => response.json())
      .then((data) => {
        isCaregiver
          ? navigate("/dashboard/requests")
          : navigate("/dashboard/book");
      });
  };

  return (
    <>
      <NavigationBar />
      <div id="description-container">
        <h1 className="description__header">Complete Your Profile</h1>
        <form className="description-form-container" onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="First name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Last name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-outline">
            <textarea
              className="form-control"
              rows="3"
              name="description"
              placeholder="A little bit about you and your family"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="btn description" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Description;
