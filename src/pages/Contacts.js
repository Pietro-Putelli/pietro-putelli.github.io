import React, { memo } from "react";
import data from "../constants/data";
import CenterTitlePagePattern from "./CenterTitlePagePattern";

const Contacts = () => {
  return <CenterTitlePagePattern {...data.contacts} />;
};

export default memo(Contacts);
