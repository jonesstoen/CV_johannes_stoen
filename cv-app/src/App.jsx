import './App.css';
import portrait from './assets/portrait.png';

const projects = [
    {
        title: 'MasterMatch – UIO master planner',
        description: 'Webapp i React/Vite som hjelper studenter å sjekke opptakskrav til masterprogrammer.',
        tech: ['React', 'Vite', 'JavaScript'],
    },
    {
        title: 'Fiskeklar – IN2000 weather app',
        description: 'Android-app for hobbyfiskere med kartlag for vind, bølger, strøm og værvarsler.',
        tech: ['Kotlin', 'Jetpack Compose', 'MapLibre'],
    },
    {
        title: 'Workout Tracker',
        description: 'Enkel treningslogg med støtte for styrke- og kondisjonsøkter.',
        tech: ['React', 'TypeScript'],
    },
];

function App() {
    return (
        <div className="app">
            <header className="hero">
                <img src={portrait} alt="Johannes Støen" className="hero__portrait" />

                <div>
                    <h1>Johannes Støen</h1>
                    <p className="hero__title">
                        Informatikkstudent · Utvikler · Systemarkitektur
                    </p>
                    <p className="hero__summary">
                        Masterstudent i informatikk (programmering og systemarkitektur) ved UiO.
                        Interessert i web, app-utvikling og plattformøkosystemer.
                    </p>

                    <div className="hero__links">
                        <a href="mailto:johannesstoen@gmail.com">E-post</a>
                        <a href="https://github.com/jonesstoen" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section id="about">
                    <h2>Om meg</h2>
                    <p>
                        Jeg liker å bygge ting som faktisk blir brukt – fra små verktøy for egne studier
                        til større gruppeprosjekter i kurs som IN2000 og IN5320. Trives godt i team, og
                        har erfaring som gruppelærer/assistent i programmeringsfag.
                    </p>
                </section>

                <section id="education">
                    <h2>Utdanning</h2>
                    <ul className="list">
                        <li>
                            <strong>Master i informatikk: programmering og systemarkitektur</strong> – UiO
                            <span className="list__meta">2025–2027 (pågående)</span>
                        </li>
                        <li>
                            <strong>Bachelor i informatikk</strong> – UiO
                            <span className="list__meta">år–år (fyll inn)</span>
                        </li>
                        <li>
                            <strong>Bachelor i statsvitenskap</strong> – NTNU
                            <span className="list__meta">år–år (fyll inn)</span>
                        </li>
                    </ul>
                </section>

                <section id="experience">
                    <h2>Erfaring</h2>
                    <ul className="list">
                        <li>
                            <strong>Gruppelærer / studentassistent</strong> – UiO
                            <span className="list__meta">kurs + år (fyll inn)</span>
                            <p>
                                Veiledning av studenter, retting, hjelp med programmeringsoppgaver og
                                gruppeøvelser.
                            </p>
                        </li>
                        <li>
                            <strong>Butikkmedarbeider</strong> – Joker
                            <span className="list__meta">4 år ved siden av studier</span>
                            <p>
                                Kundeservice, ansvar for kasse, varepåfylling og praktisk drift i en travel
                                nærbutikk.
                            </p>
                        </li>
                    </ul>
                </section>

                <section id="projects">
                    <h2>Utvalgte prosjekter</h2>
                    <div className="projects">
                        {projects.map((project) => (
                            <article key={project.title} className="project-card">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <p className="project-card__tech">
                                    {project.tech.join(' · ')}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="skills">
                    <h2>Tekniske ferdigheter</h2>
                    <div className="skills">
                        <div>
                            <h3>Språk</h3>
                            <p>Java · Kotlin · Python · JavaScript/TypeScript · SQL</p>
                        </div>
                        <div>
                            <h3>Frontend</h3>
                            <p>React · Vite · HTML · CSS</p>
                        </div>
                        <div>
                            <h3>Andre</h3>
                            <p>Git/GitHub · Android · Jetpack Compose · Docker (grunnleggende)</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Johannes Støen</p>
            </footer>
        </div>
    );
}

export default App;