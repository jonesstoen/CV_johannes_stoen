import { useState } from 'react';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

const PROJECT_META = [
    {
        title: 'FiskeKlar — Maritime Weather',
        tech: ['Kotlin', 'Jetpack Compose', 'MapLibre', 'Room', 'Coroutines/Flow', 'MVVM'],
        githubUrl: 'https://github.com/jonesstoen/fiskeklar',
        gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 55%, #818cf8 100%)',
    },
    {
        title: 'WorkoutTracker — iOS',
        tech: ['Swift', 'SwiftUI', 'HealthKit', 'Core Data', 'UDF'],
        githubUrl: 'https://github.com/jonesstoen/workout-tracker',
        gradient: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 55%, #fb923c 100%)',
    },
    {
        title: 'UiO Master Match',
        tech: ['React', 'Vite', 'Tailwind', 'LocalStorage'],
        githubUrl: 'https://github.com/jonesstoen/uio-master-match',
        demoUrl: 'https://jonesstoen.github.io/uio-master-match/',
        gradient: 'linear-gradient(135deg, #14532d 0%, #15803d 55%, #4ade80 100%)',
    },
    {
        title: 'Inspector Chalmers — PWA',
        tech: ['React', 'PWA', 'IndexedDB', 'DHIS2', 'localforage'],
        githubUrl: 'https://github.com/jonesstoen/Chalmers',
        gradient: 'linear-gradient(135deg, #134e4a 0%, #0f766e 55%, #14b8a6 100%)',
    },
];

function Projects() {
    const { lang } = useLang();
    const tr = translations[lang].projects;
    const [demoOpen, setDemoOpen] = useState(null);

    const projects = PROJECT_META.map((meta, i) => ({
        ...meta,
        case: tr.cases[i],
    }));

    const handleMouseMove = (e, i) => {
        if (demoOpen === i) return;
        const card = e.currentTarget;
        const linksArea = card.querySelector('.project-card__links');
        if (linksArea) {
            const linksRect = linksArea.getBoundingClientRect();
            if (e.clientY >= linksRect.top && e.clientY <= linksRect.bottom) {
                card.style.transform = 'translateY(-4px)';
                return;
            }
        }
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = '';
    };

    return (
        <section id="projects">
            <h2>{tr.heading}</h2>
            <div className="projects">
                {projects.map((project, i) => (
                    <article
                        key={project.title}
                        className="project-card"
                        onMouseMove={(e) => handleMouseMove(e, i)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="project-card__banner"
                            style={{ background: project.gradient }}
                        />
                        <h3>{project.title}</h3>

                        <dl className="project-card__case">
                            <div className="project-card__case-row">
                                <dt>{tr.problemLabel}</dt>
                                <dd>{project.case.problem}</dd>
                            </div>
                            <div className="project-card__case-row">
                                <dt>{tr.builtLabel}</dt>
                                <dd>{project.case.built}</dd>
                            </div>
                            <div className="project-card__case-row">
                                <dt>{tr.outcomeLabel}</dt>
                                <dd>{project.case.outcome}</dd>
                            </div>
                        </dl>

                        <div className="project-card__tech">
                            {project.tech.map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>

                        <div className="project-card__links">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-card__link"
                                    aria-label={`${tr.github}: ${project.title}`}
                                >
                                    <CodeBracketIcon className="project-card__link-icon" />
                                    <span>{tr.github}</span>
                                </a>
                            )}
                            {project.demoUrl && (
                                <button
                                    type="button"
                                    className={`project-card__link${demoOpen === i ? ' project-card__link--active' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setDemoOpen(demoOpen === i ? null : i);
                                    }}
                                    aria-expanded={demoOpen === i}
                                >
                                    <ArrowTopRightOnSquareIcon className="project-card__link-icon" />
                                    <span>{demoOpen === i ? tr.closeDemo : tr.demo}</span>
                                </button>
                            )}
                        </div>

                        {demoOpen === i && project.demoUrl && (
                            <div className="project-card__demo">
                                <iframe
                                    src={project.demoUrl}
                                    title={`Demo: ${project.title}`}
                                    className="project-card__iframe"
                                    loading="lazy"
                                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                />
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;
