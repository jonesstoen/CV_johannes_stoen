import { useEffect, useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import StructuredData from './components/StructuredData';
import CommandPalette from './components/CommandPalette';
import { useLang } from './context/LanguageContext';

const SECTION_IDS = ['about', 'education', 'experience', 'projects', 'contact'];

export default function App() {
    const { toggle: toggleLang } = useLang();
    const [activeSection, setActiveSection] = useState('about');
    const [cmdOpen, setCmdOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem('cv-theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light' : 'dark';
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('cv-theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (
                e.target.tagName === 'INPUT' ||
                e.target.tagName === 'TEXTAREA' ||
                e.target.isContentEditable
            ) return;

            if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
                e.preventDefault();
                setCmdOpen(prev => !prev);
                return;
            }
            if (cmdOpen) return;

            if (e.key === 't' || e.key === 'T') {
                setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
            }
            if (e.key === 'h' || e.key === 'H') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            if (e.key === 'l' || e.key === 'L') {
                toggleLang();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [toggleLang, cmdOpen]);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const offset = 120;
            let current = 'about';
            SECTION_IDS.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;
                if (scrollY >= el.offsetTop - offset) current = id;
            });
            setActiveSection(current);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('scroll-reveal');
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((s) => observer.observe(s));
        return () => sections.forEach((s) => observer.unobserve(s));
    }, []);

    return (
        <>
            <div className="app">
                <StructuredData />
                <a href="#about" className="skip-to-content">
                    Hopp til hovedinnhold
                </a>
                <NavBar
                    activeSection={activeSection}
                    theme={theme}
                    setTheme={setTheme}
                />

                <Hero />

                <main>
                    <About />
                    <Education />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Contact />
                </main>

                <Footer />
                <BackToTop />
            </div>
            {cmdOpen && (
                <CommandPalette
                    theme={theme}
                    setTheme={setTheme}
                    onClose={() => setCmdOpen(false)}
                />
            )}
        </>
    );
}
