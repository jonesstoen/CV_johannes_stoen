import { useState, useRef, useEffect } from 'react';
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
    ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import "./NavBar.css";
import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

export default function NavBar({ activeSection, theme, setTheme }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { lang, toggle: toggleLang } = useLang();
    const tr = translations[lang].nav;
    const trHero = translations[lang].hero;

    const navRef = useRef(null);
    const linkRefs = useRef({});
    const [pill, setPill] = useState({ left: 0, width: 0, height: 0, opacity: 0 });

    useEffect(() => {
        const measure = () => {
            const nav = navRef.current;
            const link = linkRefs.current[activeSection];
            if (!nav || !link) return;
            const nr = nav.getBoundingClientRect();
            const lr = link.getBoundingClientRect();
            setPill({ left: lr.left - nr.left, width: lr.width, height: lr.height, opacity: 1 });
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [activeSection, lang]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    const NAV_LINKS = [
        { id: 'about',      label: tr.about,      icon: UserIcon,         aria: tr.ariaAbout },
        { id: 'education',  label: tr.education,  icon: AcademicCapIcon,  aria: tr.ariaEducation },
        { id: 'experience', label: tr.experience, icon: BriefcaseIcon,    aria: tr.ariaExperience },
        { id: 'projects',   label: tr.projects,   icon: RocketLaunchIcon, aria: tr.ariaProjects },
        { id: 'contact',    label: tr.contact,    icon: EnvelopeIcon,     aria: tr.ariaContact },
    ];

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
                    ref={navRef}
                    className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}
                    aria-label="Hovedmeny"
                >
                    <span
                        className="navbar__pill"
                        style={{ left: pill.left, width: pill.width, height: pill.height, opacity: pill.opacity }}
                        aria-hidden="true"
                    />
                    {NAV_LINKS.map(({ id, label, icon: Icon, aria }) => (
                        <button
                            key={id}
                            ref={(el) => { linkRefs.current[id] = el; }}
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
                        <span>{lang === 'no' ? 'EN' : 'NO'}</span>
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

                    <button
                        type="button"
                        className="navbar__download"
                        onClick={() => window.print()}
                        aria-label={trHero.ariaDownload}
                    >
                        <ArrowDownTrayIcon className="navbar__icon" />
                        <span>{trHero.download}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
