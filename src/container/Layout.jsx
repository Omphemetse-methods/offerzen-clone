import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <section className="max-w-screen min-h-screen bg-gray-100">
      <Header />

      <section className="pb-10">
        <Outlet />
      </section>
    </section>
  );
};

export default Layout;
