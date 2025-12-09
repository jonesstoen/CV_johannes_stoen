import {
    UserIcon,
    RocketLaunchIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    SunIcon,
    MoonIcon,
} from "@heroicons/react/24/outline";
import "./NavBar.css";

export default function NavBar({ activeSection, theme, setTheme }) {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const offset = 80;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <header className="navbar">
            <div className="navbar__container">
                <button
                    type="button"
                    className="navbar__brand"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    Johannes Støen
                </button>

                <nav className="navbar__links" aria-label="Hovedmeny">

                    <button
                        type="button"
                        onClick={() => scrollTo("about")}
                        className={`navbar__link ${
                            activeSection === "about" ? "navbar__link--active" : ""
                        }`}
                    >
                        <UserIcon className="navbar__icon" />
                        <span>Om meg</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollTo("education")}
                        className={`navbar__link ${
                            activeSection === "education" ? "navbar__link--active" : ""
                        }`}
                    >
                        <AcademicCapIcon className="navbar__icon" />
                        <span>Utdanning</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollTo("experience")}
                        className={`navbar__link ${
                            activeSection === "experience" ? "navbar__link--active" : ""
                        }`}
                    >
                        <BriefcaseIcon className="navbar__icon" />
                        <span>Erfaring</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollTo("projects")}
                        className={`navbar__link ${
                            activeSection === "projects" ? "navbar__link--active" : ""
                        }`}
                    >
                        <RocketLaunchIcon className="navbar__icon" />
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