import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>Dimeji</h2>
        <p>
          <a href="mailto:dimejiishim@gmail.com">dimejiishim@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Dimeji</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More About Me
            </Link>
          ) : (
            <Link to="/about" className="button">
              Learn More About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Dimeji</p>
    </section>
  </section>
);

export default SideBar;
