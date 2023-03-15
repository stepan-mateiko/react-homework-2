import React from "react";
import propTypes from "prop-types";

import Element from "../Element";

const List = (props) => {
  const { number, bgColor, width, title } = props;
  const listStyles = {
    width,
    backgroundColor: "#d9d9d9",
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    gap: 19,
    justifyContent: "space-around",
    textAlign: "center",
    paddingBottom: 24,
  };
  const items = [];
  for (let i = 0; i < number; i++) {
    items.push(
      <li>
        <Element bgColor={bgColor} width="90%" />
      </li>
    );
  }
  return (
    <ul style={listStyles}>
      <h3>{title}</h3>
      {items}
    </ul>
  );
};

export default List;

List.propTypes = {
  number: propTypes.number.isRequired,
  bgColor: propTypes.string,
  width: propTypes.string,
  title: propTypes.string.isRequired,
};
List.defaultProps = {
  bgColor: "yellow",
  width: "80%",
};
