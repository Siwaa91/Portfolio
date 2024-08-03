import Styles from "./SkillsStyle.module.css";
import checkmarkDark from "../../assets/checkmark-dark.svg";
import checkmarkLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const Icon = theme === "light" ? checkmarkLight : checkmarkDark;
  return (
    <section id="skills" className={Styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={Styles.skillList}>
        <SkillList src={Icon} skill="Java" />
        <SkillList src={Icon} skill="JavaScript" />
        <SkillList src={Icon} skill="C/C++" />
        <SkillList src={Icon} skill="Python" />
        <SkillList src={Icon} skill="SQL" />
        <SkillList src={Icon} skill="Php" />
      </div>
      <hr />
      <div className={Styles.skillList}>
        <SkillList src={Icon} skill="Unity" />
        <SkillList src={Icon} skill="React.js" />
        <SkillList src={Icon} skill="Android Studio" />
        <SkillList src={Icon} skill="Git" />
        <SkillList src={Icon} skill="Github" />
        <SkillList src={Icon} skill="Django" />
      </div>
    </section>
  );
}

export default Skills;
