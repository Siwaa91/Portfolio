import Styles from "./ProjectsStyles.module.css";
import bird from "../../assets/flappy_bird.png";
import ProjectCard from "../../common/ProjectCard";
import todolist from "../../assets/to-do-list.png";
import currency from "../../assets/currency-converter.png";
import tic from "../../assets/tic-tac-toe.jpg";
import tweet from "../../assets/tweet.jpeg";
import note from "../../assets/note.png";

function Projects() {
  return (
    <section id="projects" className={Styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={Styles.ProjectsContainer}>
        <ProjectCard
          src={tweet}
          link="https://github.com/Siwaa91/Django-Tweet"
          h3="Tweet App"
          p="Created with django"
        />
        <ProjectCard
          src={bird}
          link="https://github.com/Siwaa91/Flappy-Bird"
          h3="Flappy Bird"
          p="Created with unity engine"
        />
        <ProjectCard
          src={todolist}
          link="https://github.com/Siwaa91/To-Do-List"
          h3="To Do List"
          p="Created with React.js"
        />
        <ProjectCard
          src={currency}
          link="https://github.com/Siwaa91/Currency-Converter"
          h3="Currency Converter"
          p="Created with Currency Api"
        />
        <ProjectCard
          src={tic}
          link="https://github.com/Siwaa91/Tic-Tac-Toe"
          h3="Tic Tac Toe"
          p="Created with JavaScript"
        />
        <ProjectCard
          src={note}
          link="https://github.com/Siwaa91/Notes-App"
          h3="Notes app"
          p="Created with react.js, django"
        />
      </div>
    </section>
  );
}

export default Projects;
