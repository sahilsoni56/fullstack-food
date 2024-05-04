import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import {Store} from "../redux/store"
function Layout() {
  return (
    <>
      <Provider store={Store}>
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

export default Layout;
