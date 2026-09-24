import { useState } from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

const PAGE_SIZE = 3;

export function Projects() {
  const [numberShown, setNumberShown] = useState(PAGE_SIZE);
  const visibleProjects = projects.slice(0, numberShown);
  const hasMore = numberShown < projects.length;

  return (
    <section className="section projects" id="projects">
      <div className="section__inner">
        <h2 className="section__title">Projects</h2>
        <ul className="projects__list">
          {visibleProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        {hasMore ? (
          <button
            className="projects__more"
            type="button"
            onClick={() => setNumberShown((count) => count + PAGE_SIZE)}
          >
            Show more
          </button>
        ) : null}
      </div>
    </section>
  );
}
