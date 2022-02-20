import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  let location = useLocation();

  return (
    <section
      className="flex justify-center py-6"
      style={{ backgroundColor: "rgb(52,57,81)" }}
    >
      <div className="w-8/12 flex justify-between items-center">
        <Link to="/">
          <p className="text-white border-2 border-white px-4 py-1">OfferZen</p>
        </Link>

        <section className="flex items-center justify-between space-x-4 text-white">
          <p className="text-xs">You are not visible to companies</p>
          <Link to="">Dashboard</Link>
          <p>Profile</p>
          <Link to="interview_requests">Interviews</Link>
          <p>Calendar</p>
          <p>More</p>
        </section>
      </div>
    </section>
  );
};

export default Header;
