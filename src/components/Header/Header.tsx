import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import { Contact } from "../Contact/Contact";
import "./Header.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#home" onClick={closeMenu}>
          {profile.firstName} {profile.lastName}
        </a>

        <button
          className="header__menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="header__menu-icon" aria-hidden="true" />
        </button>

        <div
          className={`header__panel${menuOpen ? " header__panel--open" : ""}`}
        >
          <nav className="header__nav" aria-label="Primary">
            <ul className="header__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="header__nav-link"
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__mobile-contact">
            <Contact compact />
          </div>
        </div>
      </div>
    </header>
  );
}
