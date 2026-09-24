import { profile } from "../../data/profile";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="section__inner hero__inner">
        <p className="hero__eyebrow">Hi, my name is</p>
        <h1 className="hero__title">
          {profile.firstName} {profile.lastName}
        </h1>
        <p className="hero__subtitle">{profile.title}</p>
        <div className="hero__bio">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="hero__actions">
          <a className="hero__button hero__button--primary" href="#projects">
            View projects
          </a>
          <a className="hero__button hero__button--secondary" href="#contact">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
