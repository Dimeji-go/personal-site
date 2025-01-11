import React from "react";
import PropTypes from "prop-types";

const Education = () => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    Hmmm
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.number,
    }),
  ),
};

Education.defaultProps = {
  data: [],
};

export default Education;
