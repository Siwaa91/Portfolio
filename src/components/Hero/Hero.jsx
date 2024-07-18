import Styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkdenDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkdenDark;

  return (
    <section id="hero" className={Styles.container}>
      <div className={Styles.colorModeContainer}>
        <img className={Styles.hero} src={heroImg} alt="Profile picture" />
        <img
          className={Styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={Styles.info}>
        <h1>Shivanandan K B</h1>
        <h2>Developer</h2>
        <span>
          <a href="https://github.com/Siwaa91" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivanandan-k-b-69891a249/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={Styles.description}>
          I specialize in creating dynamic websites with React.js and robust
          Android apps using Java. My focus is on delivering responsive,
          user-friendly solutions that perform seamlessly across devices.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
