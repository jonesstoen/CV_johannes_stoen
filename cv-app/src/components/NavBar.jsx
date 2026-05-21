import { useState } from 'react';
import {
    UserIcon,
    RocketLaunchIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    EnvelopeIcon,
    SunIcon,
    MoonIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import "./NavBar.css";
import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

export default function NavBar({ activeSection, theme, setTheme }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { lang, toggle: toggleLang } = useLang();
    const tr = translations[lang].nav;

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
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
                    aria-label={tr.ariaMenu}
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
                    {[
                        { id: 'about',      label: tr.about,      icon: UserIcon,          aria: tr.ariaAbout },
                        { id: 'education',  label: tr.education,  icon: AcademicCapIcon,   aria: tr.ariaEducation },
                        { id: 'experience', label: tr.experience, icon: BriefcaseIcon,     aria: tr.ariaExperience },
                        { id: 'projects',   label: tr.projects,   icon: RocketLaunchIcon,  aria: tr.ariaProjects },
                        { id: 'contact',    label: tr.contact,    icon: EnvelopeIcon,      aria: tr.ariaContact },
                    ].map(({ id, label, icon: Icon, aria }) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => scrollTo(id)}
                            className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
                            aria-label={aria}
                        >
                            <Icon className="navbar__icon" aria-hidden="true" />
                            <span>{label}</span>
                        </button>
                    ))}

                    <button
                        type="button"
                        className="navbar__link navbar__lang-mobile"
                        onClick={() => { toggleLang(); setIsMobileMenuOpen(false); }}
                        aria-label={tr.ariaLang}
                    >
                        <span>{lang === 'no' ? 'EN — English' : 'NO — Norsk'}</span>
                    </button>
                </nav>

                <div className="navbar__controls">
                    <button
                        type="button"
                        className="navbar__lang-toggle"
                        onClick={toggleLang}
                        aria-label={tr.ariaLang}
                    >
                        {lang === 'no' ? 'EN' : 'NO'}
                    </button>

                    <button
                        type="button"
                        className="navbar__toggle"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label={tr.ariaTheme}
                    >
                        {theme === "dark" ? (
                            <SunIcon className="navbar__icon" />
                        ) : (
                            <MoonIcon className="navbar__icon" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
