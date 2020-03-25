import React from "react";
import PropTypes from "prop-types";

const Error = ({ children }) => {
  return (
    <>
      <p className="red darken-4 error">{children}</p>
    </>
  );
};

Error.propTypes = {
  children: PropTypes.string.isRequired
};

export default Error;
