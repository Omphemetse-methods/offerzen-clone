import React from "react";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
  return (
    <section>
      <p>LandingPage</p>
      <Link to="/candidate">Login</Link>
    </section>
  );
};

export default LandingPage;
