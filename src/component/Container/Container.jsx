import React from "react";

function Container({ children, ...props }) {
  return (
    <div {...props} className="w-full max-w-7xl mx-auto px-4 bg-transparent">
      {children}
    </div>
  );
}
export default Container;
