import React from "react";
import Element from "../Element";

const Header = () => {
  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#D9D9D9",
    padding: "6px 26px",
    margin: "20px auto",
    alignItems: "center",
  };
  const extraStyle = {
    width: "15%",
  };
  const moreStyles = {
    width: "26%",
    display: "flex",
    justifyContent: "space-around",
    gap: 19,
  };
  return (
    <header style={headerStyles}>
      <div style={extraStyle}>
        <Element bgColor="#F1F2AE" />
      </div>
      <h1>Blog Name</h1>
      <div style={moreStyles}>
        <Element bgColor="#E7EFD6" />
        <Element bgColor="#E7EFD6" />
        <Element bgColor="#E7EFD6" />
        <Element bgColor="#E7EFD6" />
        <Element bgColor="#E7EFD6" />
      </div>
    </header>
  );
};

export default Header;
