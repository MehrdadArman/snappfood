import React from "react";
import MainNav from "../layout/nav/MainNav";
import AppBar from "./appBar/AppBar";

const FullPageLayout = ({ children }) => {
  return (
    <>
      <MainNav />
      <main className="full-layout">{children}</main>
      <AppBar />
    </>
  );
};

export default FullPageLayout;
