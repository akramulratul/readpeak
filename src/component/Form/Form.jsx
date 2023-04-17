import React from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <form
      method="post"
      className="new-login-form form-container mt-40"
      id="new-login-form"
      accept-charset="utf-8"
    >
      <div className="logo"></div>
      <div className="form-group input-thing">
        <label for="exampleInputEmail1" className="form-label text-white">
          Work Email Address
        </label>
        <div className="input-container">
          <FontAwesomeIcon className="icon" icon={faUser} />
          <div className="input text required">
            <input
              name="data[User][password]"
              className="form-control input-width no-border input-new-login pull-left"
              placeholder="Email"
              type="password"
              id="UserPassword"
              required="required"
            />
          </div>
        </div>
        <label for="exampleInputEmail1" className="form-label text-white">
          Password
        </label>
        <div className="input-container">
          <FontAwesomeIcon className="icon" icon={faLock} />
          <div className="input text required">
            <input
              name="data[User][password]"
              className="form-control input-width no-border input-new-login pull-left"
              placeholder="Password"
              type="password"
              id="UserPassword"
              required="required"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary login-btn">
        LOGIN
        <span className="m-1">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </span>
      </button>
    </form>
  );
};

export default Form;
