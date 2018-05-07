import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        My current dev stack includes Javascript, Node.js, Express.js, React.js,
        Create-react-app, MongoDB and mySQL.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand javascript" />
            <em>Javascript</em>
          </li>
          <li>
            <span className="bar-expand react" />
            <em>React.js</em>
          </li>
          <li>
            <span className="bar-expand express" />
            <em>Express.js</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>Nodejs</em>
          </li>
          <li>
            <span className="bar-expand mongodb" />
            <em>MongoDB</em>
          </li>
          <li>
            <span className="bar-expand mysql" />
            <em>mySQL</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
