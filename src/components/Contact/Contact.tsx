import { profile } from "../../data/profile";
import emailIcon from "../../assets/icons/email.svg";
import locationIcon from "../../assets/icons/location.svg";
import resumeIcon from "../../assets/icons/resume.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import "./Contact.css";

interface ContactProps {
  compact?: boolean;
}

export function Contact({ compact = false }: ContactProps) {
  return (
    <div className={`contact${compact ? " contact--compact" : ""}`}>
      <ul className="contact__details">
        <li>
          <a className="contact__link" href={`mailto:${profile.email}`}>
            <img src={emailIcon} alt="" />
            <span>{profile.email}</span>
          </a>
        </li>
        <li>
          <a
            className="contact__link"
            href={profile.locationUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img src={locationIcon} alt="" />
            <span>{profile.locationText}</span>
          </a>
        </li>
        <li>
          <a className="contact__link" href={profile.resume} download>
            <img src={resumeIcon} alt="" />
            <span>Download resume</span>
          </a>
        </li>
      </ul>

      <ul className="contact__socials">
        <li>
          <a
            className="contact__social"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="" />
          </a>
        </li>
        <li>
          <a
            className="contact__social"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="" />
          </a>
        </li>
        <li>
          <a
            className="contact__social"
            href={profile.facebookUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <img src={facebookIcon} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
