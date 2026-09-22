import type { Project } from "../../types";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img
        className="project-card__image"
        src={project.image}
        alt={`${project.name} preview`}
      />
      <div className="project-card__body">
        <h3 className="project-card__title">{project.name}</h3>
        {project.description.map((paragraph) => (
          <p key={paragraph} className="project-card__text">
            {paragraph}
          </p>
        ))}
        <div className="project-card__links">
          <a
            className="project-card__link"
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
          >
            View code
          </a>
          <a
            className="project-card__link"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live demo
          </a>
        </div>
      </div>
    </article>
  );
}
