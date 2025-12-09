import { useEffect, useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import StructuredData from './components/StructuredData';
import ScrollProgress from './components/ScrollProgress';

const SECTION_IDS = ['about', 'projects', 'experience', 'education'];

export default function App() {
    const [activeSection, setActiveSection] = useState('about');
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
            // Only trigger if not typing in an input/textarea
            if (
                e.target.tagName === 'INPUT' ||
                e.target.tagName === 'TEXTAREA' ||
                e.target.isContentEditable
            ) {
                return;
            }

            // 't' key to toggle theme
            if (e.key === 't' || e.key === 'T') {
                setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
            }

            // 'h' key to scroll to top
            if (e.key === 'h' || e.key === 'H') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [setTheme]);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const offset = 120;

            let current = 'about';

            SECTION_IDS.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;
                const top = el.offsetTop - offset;
                if (scrollY >= top) current = id;
            });

            setActiveSection(current);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-reveal');
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="app">
            <StructuredData />
            <ScrollProgress />
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
            </main>

            <Footer />
            <BackToTop />
        </div>
    );
}