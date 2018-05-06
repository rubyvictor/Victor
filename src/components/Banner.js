import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Victor Lee.</h1>
      <h3>
        I'm a Singapore based <span>full stack Node.js Developer</span>,
        <span>career switcher</span> and <span>former tech start-up co-founder</span> creating interesting apps. Let's 
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me.
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
