import React from "react";
import "./spinner.styles.css";

const Spinner: React.FC = () => {
  return (
    <div className="spinner-container mt-3">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
