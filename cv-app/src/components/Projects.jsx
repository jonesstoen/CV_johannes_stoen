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

import { useState } from 'react';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

function Projects() {
    const [tiltedCard, setTiltedCard] = useState(null);

    const handleMouseMove = (e, index) => {
        const card = e.currentTarget;
        const linksArea = card.querySelector('.project-card__links');
        
        // Check if mouse is over the links area
        if (linksArea) {
            const linksRect = linksArea.getBoundingClientRect();
            const mouseY = e.clientY;
            
            // If hovering over links, disable tilt
            if (mouseY >= linksRect.top && mouseY <= linksRect.bottom) {
                card.style.transform = 'translateY(-4px)';
                return;
            }
        }
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Reduced tilt intensity (divided by 20 instead of 10)
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        setTiltedCard(index);
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = '';
        setTiltedCard(null);
    };

    return (
        <section id="projects">
            <h2>Utvalgte prosjekter</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <article
                        key={project.title}
                        className="project-card"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={handleMouseLeave}
                    >
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