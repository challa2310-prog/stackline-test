import React, { Fragment } from "react";
import Header from './header';
import SideBar from './side-bar';
import "./app-layout.css";
const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      <div className="row main-container">
        <div className="col-lg-2 col-md-2 px-md-0 py-md-0">
          <SideBar />
        </div>
        <div className="col-lg-10 col-md-10">
          {children}
        </div>
      </div>
    </Fragment>
  )
}
export default AppLayout;