import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = (props) => {
  const userDetails = sessionStorage.getItem("userDetails");

  return userDetails ? <Outlet />  : (<Navigate to="/signin" />);
};

export default PrivateRoutes;
