import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_title">
        <h1>About us</h1>
      </div>
      <div className="about_content">
        <div className="about_lower">
          <div className="about_img">
            <img
              src="https://static.toiimg.com/photo/86814605.cms"
              alt="lavazza_caffee"
            />
          </div>
          <div className="about_info">
            <h2>What makes our coffee special?</h2>
            <p className="desc">
              Our coffee makes your day batter.
              With every sip of our coffee, you feel like you have been born again.
              A passion for excellence that makes every cup a unique experience.
              Our story, like all stories, is made up of emotions, obstacles,
              important changes and momentum carrying us into the future. 
              With our coffee you will always be in a good company.
            </p>
            <div className="about_btn">
              <a href="https://www.lavazza.com/en/about-us/history.html" target="_blank" rel="noreferrer">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
