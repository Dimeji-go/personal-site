import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main description={"Dimeji's personal website"}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A beautiful, responsive, react application written with modern
            Javascript.
          </p>
        </div>
      </header>
      <p>
        {" "}
        Welcome to my website. Please feel free to read more{" "}
        <Link to="/about">about me</Link>, or you can check out my{" "}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {" "}
        Source available{" "}
        <a href="https://github.com/Dimeji-go/personal-site">
          my personal website repository
        </a>
        .
      </p>
    </article>
  </Main>
);

export default Index;
