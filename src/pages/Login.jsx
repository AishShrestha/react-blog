import React from "react";
import { Login as LoginComponent } from "../component/index"; // Make sure the alias starts with uppercase

function Login() {
  return (
    <div className="py-8">
      <LoginComponent />
    </div>
  );
}

export default Login;
