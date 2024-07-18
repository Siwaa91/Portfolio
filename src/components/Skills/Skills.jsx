import Styles from "./SkillsStyle.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function Skills() {
  return (
    <section id="skills" className={Styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={Styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="C/C++" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Php" />
      </div>
      <hr />
      <div className={Styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Unity" />
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="Android Studio" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Github" />
      </div>
    </section>
  );
}

export default Skills;
