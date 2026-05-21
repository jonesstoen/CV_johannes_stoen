import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

const PROJECT_META = [
    {
        title: 'FiskeKlar — Maritime Weather',
        tech: ['Kotlin', 'Jetpack Compose', 'MapLibre', 'Room', 'Coroutines/Flow', 'MVVM'],
        githubUrl: 'https://github.com/jonesstoen/fiskeklar',
        gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 55%, #38bdf8 100%)',
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
];

function Projects() {
    const { lang } = useLang();
    const tr = translations[lang].projects;

    const projects = PROJECT_META.map((meta, i) => ({
        ...meta,
        description: tr.descriptions[i],
    }));

    const handleMouseMove = (e) => {
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
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="project-card"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="project-card__banner"
                            style={{ background: project.gradient }}
                        />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
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
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-card__link"
                                    aria-label={`${tr.demo}: ${project.title}`}
                                >
                                    <ArrowTopRightOnSquareIcon className="project-card__link-icon" />
                                    <span>{tr.demo}</span>
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
