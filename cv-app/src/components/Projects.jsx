const projects = [
    {
        title: 'FiskeKlar — Maritime Weather',
        description:
            'Android-app som kombinerer maritimt vær og fiskelogging. Kartlag for vind, bølger, strøm, AIS og MetAlerts, bygget med ren MVVM-arkitektur og tydelig lagdeling. Nominert til Meteorologisk institutt sin MET-pris 2025 (Team 46, IN2000).',
        tech: ['Kotlin', 'Jetpack Compose', 'MapLibre', 'Room', 'Coroutines/Flow', 'MVVM'],
        githubUrl: 'https://github.com/jonesstoen/fiskeklar',
    },
    {
        title: 'WorkoutTracker — iOS',
        description:
            'Treningsapp med kalenderoversikt, økt-detaljer og Apple Health-integrasjon. Støtter både styrke- og kondisjonsøkter, med enkel UDF-inspirert dataflyt og Core Data for lokal lagring.',
        tech: ['Swift', 'SwiftUI', 'HealthKit', 'Core Data', 'UDF'],
        githubUrl: 'https://github.com/jonesstoen/workout-tracker',
    },
    {
        title: 'UiO Master Match',
        description:
            'Nettapp som estimerer opptakspoeng til UiO-mastere basert på emner og karakterer. Semestervis oversikt, karaktervelger, statusfelt og poengsummering, med lagring i LocalStorage og fokus på enkel og rask UI.',
        tech: ['React', 'Vite', 'Tailwind', 'LocalStorage'],
        githubUrl: 'https://github.com/jonesstoen/uio-master-match',
        demoUrl: 'https://jonesstoen.github.io/uio-master-match/',
    },
];

import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

function Projects() {
    return (
        <section id="projects">
            <h2>Utvalgte prosjekter</h2>
            <div className="projects">
                {projects.map((project) => (
                    <article key={project.title} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-card__tech">
                            {project.tech.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="project-card__links">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-card__link"
                                    aria-label={`Se ${project.title} på GitHub`}
                                >
                                    <CodeBracketIcon className="project-card__link-icon" />
                                    <span>GitHub</span>
                                </a>
                            )}
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-card__link"
                                    aria-label={`Se live demo av ${project.title}`}
                                >
                                    <ArrowTopRightOnSquareIcon className="project-card__link-icon" />
                                    <span>Demo</span>
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;