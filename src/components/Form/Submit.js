import React from "react";
import "./style.css";
const Submit = () => {
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label htmlFor="firstName" className="form__label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="form__input"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label htmlFor="lastName" className="form__label">
            Last Name
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            className="form__input"
            placeholder="Last Name"
          />
        </div>
        <div className="email">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label htmlFor="password" className="form__label">
            Paswword
          </label>
          <input
            type="password"
            id="password"
            className="form__input"
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <label htmlFor="confirmPassword" className="form__label">
            Paswword
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="form__input"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div className="footer">
        <button className="btn">Register</button>
      </div>
    </div>
  );
};

export default Submit;
