import React from "react";
import "./ForgotMobile.css";

const ForgotMobile = () => {
  return (
    <div class="mobile-forget-password">
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
  );
};

export default ForgotMobile;
