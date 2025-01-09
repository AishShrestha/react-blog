import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (authStatus) {
      navigate("/");
    } else {
      navigate("/login");
    }
    setLoader(false);
  }, [navigate, authStatus, authentication]);

  return loader ? <div>Loading...</div> : <>{children}</>;
}

export default Protected;
