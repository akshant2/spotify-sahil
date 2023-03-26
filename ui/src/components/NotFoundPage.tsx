import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const NotFoundPage = () => {
  return (
    <Fragment>
      <Header />
      Page not found. Goto <Link to="/dashboard">Home Page</Link>
    </Fragment>
  );
};
export default NotFoundPage;
