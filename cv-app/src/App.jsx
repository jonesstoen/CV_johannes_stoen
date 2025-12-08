import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('dark');

    // Oppdater <html data-theme="..."> slik at CSS-variabler kan bytte tema
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className={`app app--${theme}`}>
            <header className="top-nav">
                <div className="top-nav__inner">
                    <button
                        className="top-nav__brand"
                        onClick={() => scrollToId('about')}
                    >
                        Johannes Støen
                    </button>

                    <nav className="top-nav__links">
                        <button onClick={() => scrollToId('about')}>Om meg</button>
                        <button onClick={() => scrollToId('projects')}>Prosjekter</button>
                        <button onClick={() => scrollToId('experience')}>Erfaring</button>
                        <button onClick={() => scrollToId('education')}>Utdanning</button>
                    </nav>

                    <button
                        className="top-nav__toggle"
                        onClick={toggleTheme}
                        aria-label="Bytt tema"
                    >
                        {theme === 'dark' ? '☀︎' : '🌙'}
                    </button>
                </div>
            </header>

            <Hero />
            <main>
                <About />
                <Education />
                <Experience />
                <Projects />
                <Skills />
            </main>
            <Footer />
        </div>
    );
}

export default App;