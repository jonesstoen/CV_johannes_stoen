import { useEffect, useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Background from './components/Background';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

const SECTION_IDS = ['projects', 'background', 'contact'];

export default function App() {
    const [activeSection, setActiveSection] = useState('projects');
    const [theme, setTheme] = useState(() => {
        try {
            const stored = localStorage.getItem('cv-theme');
            if (stored) return stored;
        } catch { /* storage blocked: fall back to system */ }
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try { localStorage.setItem('cv-theme', theme); } catch { /* ignore */ }
    }, [theme]);

    useEffect(() => {
        const onScroll = () => {
            const offset = 120;
            let current = SECTION_IDS[0];
            SECTION_IDS.forEach((id) => {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - offset) current = id;
            });
            setActiveSection(current);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="app">
            <StructuredData />
            <a href="#projects" className="skip-to-content">
                Hopp til hovedinnhold
            </a>
            <NavBar activeSection={activeSection} theme={theme} setTheme={setTheme} />

            <Hero />

            <main>
                <Projects />
                <Background />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
