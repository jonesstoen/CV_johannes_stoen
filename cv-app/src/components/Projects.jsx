import { useState } from 'react';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';
import workoutBanner from '../assets/workouttracker/workout_banner.webp';
import wt5808 from '../assets/workouttracker/IMG_5808.webp';
import wt5809 from '../assets/workouttracker/IMG_5809.webp';
import wt5811 from '../assets/workouttracker/IMG_5811.webp';
import wt5812 from '../assets/workouttracker/IMG_5812.webp';
import fiskeklarBanner from '../assets/fiskeklar/grib_banner.webp';
import fkHome from '../assets/fiskeklar/homscreen_img.webp';
import fkWarning from '../assets/fiskeklar/warning_screen.webp';
import fkWeather from '../assets/fiskeklar/wheaterscreen.webp';
import fkLog from '../assets/fiskeklar/fiskelogg1.webp';
import fkSos from '../assets/fiskeklar/Sosscreen.webp';
import uioBanner from '../assets/uiomastermatch/uio_banner.webp';
import mcBanner from '../assets/minichat/minichat_banner.webp';
import mcChatgpt from '../assets/minichat/chatgpt.webp';
import mcClaude from '../assets/minichat/claude.webp';
import mcPalette from '../assets/minichat/palette.webp';
import mcHistory from '../assets/minichat/history.webp';
import mcStats from '../assets/minichat/stats.webp';
import mcSettings from '../assets/minichat/settings.webp';
import chBanner from '../assets/chalmers/history_banner.webp';
import chOverview from '../assets/chalmers/overview.webp';
import chInspection from '../assets/chalmers/inspection.webp';
import chInspectionNarrow from '../assets/chalmers/inspection_narrow.webp';
import chCharts from '../assets/chalmers/charts.webp';
import chCluster from '../assets/chalmers/cluster.webp';
import ProjectModal from './ProjectModal';

const PROJECT_META = [
    {
        title: 'MiniChat: macOS',
        tech: ['Swift', 'SwiftUI', 'AppKit', 'WebKit', 'Carbon'],
        githubUrl: 'https://github.com/jonesstoen/MiniChat',
        gradient: 'linear-gradient(135deg, #1c1917 0%, #44403c 55%, #a8a29e 100%)',
        bannerImage: mcBanner,
        bannerPosition: 'center top',
        gallery: [mcBanner, mcChatgpt, mcClaude, mcPalette, mcHistory, mcStats, mcSettings],
    },
    {
        title: 'FiskeKlar: Maritime Weather',
        tech: ['Kotlin', 'Jetpack Compose', 'MapLibre', 'Room', 'Coroutines/Flow', 'MVVM'],
        githubUrl: 'https://github.com/jonesstoen/fiskeklar',
        gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 55%, #818cf8 100%)',
        bannerImage: fiskeklarBanner,
        bannerPosition: 'center center',
        gallery: [fiskeklarBanner, fkHome, fkWarning, fkWeather, fkLog, fkSos],
    },
    {
        title: 'WorkoutTracker: iOS',
        tech: ['Swift', 'SwiftUI', 'HealthKit', 'Core Data', 'UDF'],
        githubUrl: 'https://github.com/jonesstoen/workout-tracker',
        gradient: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 55%, #fb923c 100%)',
        bannerImage: workoutBanner,
        bannerPosition: 'center 52%',
        gallery: [workoutBanner, wt5808, wt5809, wt5811, wt5812],
    },
    {
        title: 'UiO Master Match',
        tech: ['React', 'Vite', 'Tailwind', 'LocalStorage'],
        githubUrl: 'https://github.com/jonesstoen/uio-master-match',
        demoUrl: 'https://uio-kalkulator.vercel.app/',
        gradient: 'linear-gradient(135deg, #14532d 0%, #15803d 55%, #4ade80 100%)',
        bannerImage: uioBanner,
        bannerPosition: 'top center',
        gallery: [uioBanner],
    },
    {
        title: 'Inspector Chalmers: PWA',
        tech: ['React', 'PWA', 'IndexedDB', 'DHIS2', 'localforage'],
        githubUrl: 'https://github.com/jonesstoen/Chalmers',
        gradient: 'linear-gradient(135deg, #134e4a 0%, #0f766e 55%, #14b8a6 100%)',
        bannerImage: chBanner,
        bannerPosition: 'center 40%',
        gallery: [chBanner, chOverview, chInspection, chInspectionNarrow, chCharts, chCluster],
    },
];

function Projects() {
    const { lang } = useLang();
    const tr = translations[lang].projects;
    const [demoOpen, setDemoOpen] = useState(null);
    const [modalOpen, setModalOpen] = useState(null);

    const projects = PROJECT_META.map((meta, i) => ({
        ...meta,
        case: tr.cases[i],
    }));

    const openModal = (i) => setModalOpen(i);

    const handleCardKey = (e, i) => {
        if (e.target !== e.currentTarget) return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(i);
        }
    };

    return (
        <section id="projects">
            <h2>{tr.heading}</h2>
            <div className="projects">
                {projects.map((project, i) => (
                    <article
                        key={project.title}
                        className={`project-card${i % 2 === 1 ? ' project-card--reverse' : ''}`}
                        onClick={() => openModal(i)}
                        onKeyDown={(e) => handleCardKey(e, i)}
                        tabIndex={0}
                        aria-label={`${tr.ariaDetails} ${project.title}`}
                    >
                        <div
                            className="project-card__banner"
                            style={{ background: project.gradient }}
                        >
                            {project.bannerImage && (
                                <img
                                    src={project.bannerImage}
                                    alt=""
                                    aria-hidden="true"
                                    className="project-card__banner-img"
                                    style={{ objectPosition: project.bannerPosition }}
                                    loading="lazy"
                                />
                            )}
                        </div>
                        <div className="project-card__body">
                            <h3>{project.title}</h3>
                            <p className="project-card__summary">{project.case.summary}</p>

                            <div className="project-card__tech">
                                {project.tech.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-card__links" onClick={(e) => e.stopPropagation()}>
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
                                <button
                                    type="button"
                                    className="project-card__link"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setModalOpen(i);
                                    }}
                                    aria-label={`${tr.ariaDetails} ${project.title}`}
                                >
                                    <ArrowsPointingOutIcon className="project-card__link-icon" />
                                    <span>{tr.details}</span>
                                </button>
                            </div>
                        </div>

                        {demoOpen === i && project.demoUrl && (
                            <div className="project-card__demo" onClick={(e) => e.stopPropagation()}>
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

            {modalOpen !== null && (
                <ProjectModal
                    project={projects[modalOpen]}
                    translations={tr}
                    onClose={() => setModalOpen(null)}
                />
            )}
        </section>
    );
}

export default Projects;
