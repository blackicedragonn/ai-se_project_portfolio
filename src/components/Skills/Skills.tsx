import { skillGroups } from "../../data/skills";
import "./Skills.css";

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <h2 className="section__title">Skills</h2>
        <ul className="skills__groups">
          {skillGroups.map((group) => (
            <li key={group.category} className="skills__group">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__items">
                {group.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
