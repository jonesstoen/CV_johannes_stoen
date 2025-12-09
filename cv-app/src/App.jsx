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