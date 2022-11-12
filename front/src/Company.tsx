import { Link, Outlet } from "react-router-dom";
import React from 'react';
export const Company = () => {
  return (
    <>
      <div>
        <h2>Company</h2>
        <nav>
	  // Outletには、CompanyInfoがレンダリングされる。
          <Link to="info">to company info</Link> |{" "}
	  // Outletには、CompanyLocationがレンダリングされる。
          <Link to="location">to company location</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
};