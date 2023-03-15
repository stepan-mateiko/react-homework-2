import React from "react";
import propTypes from "prop-types";

const Element = (props) => {
  const { width, height, bgColor } = props;
  const elementStyles = {
    width,
    height,
    backgroundColor: bgColor,
  };
  return <div style={elementStyles}></div>;
};

export default Element;

Element.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
  bgColor: propTypes.string,
};
Element.defaultProps = {
  width: "100%",
  height: "50px",
  bgColor: "yellow",
};
