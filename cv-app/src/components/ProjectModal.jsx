import { useState, useEffect, useRef } from 'react';
import {
    XMarkIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CodeBracketIcon,
    ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

export default function ProjectModal({ project, translations: tr, onClose }) {
    const [activeIdx, setActiveIdx] = useState(0);
    const closeRef = useRef(null);
    const gallery = project.gallery || [];
    const hasGallery = gallery.length > 0;
    const multipleImages = gallery.length > 1;

    const prev = () => setActiveIdx(i => (i - 1 + gallery.length) % gallery.length);
    const next = () => setActiveIdx(i => (i + 1) % gallery.length);

    useEffect(() => {
        closeRef.current?.focus();
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    useEffect(() => {
        const handle = (e) => {
            if (e.key === 'Escape') onClose();
            if (!multipleImages) return;
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        document.addEventListener('keydown', handle);
        return () => document.removeEventListener('keydown', handle);
    }, [multipleImages, onClose]);

    return (
        <div
            className="pm-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
        >
            <div className="pm" onClick={e => e.stopPropagation()}>
                <div className="pm__header">
                    <h3 className="pm__title">{project.title}</h3>
                    <button
                        ref={closeRef}
                        type="button"
                        className="pm__close"
                        onClick={onClose}
                        aria-label={tr.ariaClose}
                    >
                        <XMarkIcon className="pm__close-icon" />
                    </button>
                </div>

                <div className={`pm__body${hasGallery ? '' : ' pm__body--no-gallery'}`}>
                    {hasGallery ? (
                        <div className="pm__gallery">
                            <div className="pm__main">
                                <img
                                    key={activeIdx}
                                    src={gallery[activeIdx]}
                                    alt={`${project.title} screenshot ${activeIdx + 1}`}
                                    className="pm__main-img"
                                />
                                {multipleImages && (
                                    <>
                                        <button
                                            type="button"
                                            className="pm__nav pm__nav--prev"
                                            onClick={prev}
                                            aria-label={tr.ariaPrev}
                                        >
                                            <ChevronLeftIcon className="pm__nav-icon" />
                                        </button>
                                        <button
                                            type="button"
                                            className="pm__nav pm__nav--next"
                                            onClick={next}
                                            aria-label={tr.ariaNext}
                                        >
                                            <ChevronRightIcon className="pm__nav-icon" />
                                        </button>
                                        <span className="pm__counter">{activeIdx + 1} / {gallery.length}</span>
                                    </>
                                )}
                            </div>
                            {multipleImages && (
                                <div className="pm__thumbs">
                                    {gallery.map((img, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            className={`pm__thumb${activeIdx === i ? ' pm__thumb--active' : ''}`}
                                            onClick={() => setActiveIdx(i)}
                                            aria-label={`Screenshot ${i + 1}`}
                                        >
                                            <img src={img} alt="" aria-hidden="true" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div
                            className="pm__gradient-banner"
                            style={{ background: project.gradient }}
                        />
                    )}

                    <div className="pm__info">
                        <div className="pm__tech">
                            {project.tech.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>

                        <dl className="pm__case">
                            <div className="pm__case-row">
                                <dt>{tr.problemLabel}</dt>
                                <dd>{project.case.problem}</dd>
                            </div>
                            <div className="pm__case-row">
                                <dt>{tr.builtLabel}</dt>
                                <dd>{project.case.built}</dd>
                            </div>
                            <div className="pm__case-row">
                                <dt>{tr.outcomeLabel}</dt>
                                <dd>{project.case.outcome}</dd>
                            </div>
                        </dl>

                        <div className="pm__links">
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
                                >
                                    <ArrowTopRightOnSquareIcon className="project-card__link-icon" />
                                    <span>{tr.demo}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
