import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import References from "../components/Resume/References";
import { skills, categories } from "../data/resume/skills";

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education />,
  Experience: () => <Experience />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  References: () => <References />,
};

const Resume = () => (
  <Main title="Resume" description="Dimeji's Resume.">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Resume</h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
