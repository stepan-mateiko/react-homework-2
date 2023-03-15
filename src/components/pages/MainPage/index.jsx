import React, { Fragment } from "react";

import Header from "../../Header";
import Banner from "../../Banner";
import List from "../../List";

const MainPage = () => {
  return (
    <div style={{ width: "90%", maxWidth: "1170px", margin: "0 auto" }}>
      <Header />
      <Banner />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px auto",
          gap: "67px",
        }}
      >
        <List number={4} bgColor="#F9D7D7" width="68%" title="Blog" />
        <List number={3} bgColor="#BDCDF6" width="25%" title="News" />
      </div>
    </div>
  );
};

export default MainPage;
