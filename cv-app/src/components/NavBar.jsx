import { useState } from 'react';
import {
    UserIcon,
    RocketLaunchIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    SunIcon,
    MoonIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import "./NavBar.css";

export default function NavBar({ activeSection, theme, setTheme }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const offset = 80;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar__container">
                <button
                    type="button"
                    className="navbar__brand"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsMobileMenuOpen(false);
                    }}
                >
                    Johannes Støen
                </button>

                <button
                    type="button"
                    className="navbar__mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Åpne meny"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <XMarkIcon className="navbar__icon" />
                    ) : (
                        <Bars3Icon className="navbar__icon" />
                    )}
                </button>

                <nav 
                    className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`} 
                    aria-label="Hovedmeny"
                >
                    <button
                        type="button"
                        onClick={() => scrollTo("about")}
                        className={`navbar__link ${
                            activeSection === "about" ? "navbar__link--active" : ""
                        }`}
                        aria-label="Gå til Om meg-seksjon"
                    >
                        <UserIcon className="navbar__icon" aria-hidden="true" />
                        <span>Om meg</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollTo("education")}
                        className={`navbar__link ${
                            activeSection === "education" ? "navbar__link--active" : ""
                        }`}
                        aria-label="Gå til Utdanning-seksjon"
                    >
                        <AcademicCapIcon className="navbar__icon" aria-hidden="true" />
                        <span>Utdanning</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollTo("experience")}
                        className={`navbar__link ${
                            activeSection === "experience" ? "navbar__link--active" : ""
                        }`}
                        aria-label="Gå til Erfaring-seksjon"
                    >
                        <BriefcaseIcon className="navbar__icon" aria-hidden="true" />
                        <span>Erfaring</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollTo("projects")}
                        className={`navbar__link ${
                            activeSection === "projects" ? "navbar__link--active" : ""
                        }`}
                        aria-label="Gå til Prosjekter-seksjon"
                    >
                        <RocketLaunchIcon className="navbar__icon" aria-hidden="true" />
                        <span>Prosjekter</span>
                    </button>
                </nav>

                <button
                    type="button"
                    className="navbar__toggle"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Bytt tema"
                >
                    {theme === "dark" ? (
                        <SunIcon className="navbar__icon" />
                    ) : (
                        <MoonIcon className="navbar__icon" />
                    )}
                </button>
            </div>
        </header>
    );
}