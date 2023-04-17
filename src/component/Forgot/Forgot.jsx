import React from "react";
import "./Forgot.css";

const Forgot = () => {
  return (
    <div>
      <div class="forgot-password-container desktop-forget-password">
        <a href="/users/passwordRecovery" class="forget-password-h">
          Forgot Password?
        </a>
        <div>
          <p class="forget-password-p">Don’t have a Readpeak account yet?</p>
          <a href="/signup" class="forget-password-l">
            Create one here
          </a>
        </div>
      </div>
      ;
    </div>
  );
};

export default Forgot;
