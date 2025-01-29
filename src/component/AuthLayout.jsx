import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status); // Changed from state.auth.user

  useEffect(() => {
    // If authentication is required and user is not authenticated
    if (authentication && !authStatus) {
      navigate("/login");
    }
    // If authentication is not required and user is authenticated
    else if (!authentication && authStatus) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <div>Loading...</div> : <>{children}</>;
}

export default Protected;
