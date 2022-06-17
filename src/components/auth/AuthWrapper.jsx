import React from "react";
import { Outlet } from "react-router-dom";

export const AuthWrapper = () => {
  return (
    <div>
      <div>
        <div>login</div>
        <div>sign up</div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
