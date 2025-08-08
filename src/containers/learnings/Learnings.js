import React, {useContext} from "react";
import "./learnings.scss";
import {Fade} from "react-reveal";
import {learningSection, illustration} from "../../portfolio";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import learningAnimation from "../../assets/lottie/artificialIntelligence.json"; // <- make sure this exists
import StyleContext from "../../contexts/StyleContext";

export default function Learning() {
  const {isDark} = useContext(StyleContext);

  if (!learningSection.display) return null;

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="learning">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={learningAnimation} />
            ) : (
              <img
                alt="AI Illustration"
                src={require("../../assets/images/aiAgent.svg")}
              />
            )}
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {learningSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {learningSection.subtitle}
            </p>

            <div>
              {learningSection.learning.map((item, index) => (
                <p
                  key={index}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
