import React from "react";
import data from "../constants/data";
import CenterTitlePagePattern from "./CenterTitlePagePattern";

const Home = () => {
  return <CenterTitlePagePattern {...data.home} />;
};

export default Home;
