import { useEffect, useState } from 'react';
import { ArrowLeftIcon, CodeBracketIcon, SunIcon, MoonIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useLang } from '../context/langContext';

function useTheme() {
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

    return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}

/* Block renderers. Each case study is a list of blocks in src/caseStudies/*.js:
   text      { title, body: [p] }
   list      { title, body?: [p], items: [li] }
   screens   { title?, body?, images: [{ src, caption }] }          phone screenshots, 4 per row
   (caption is used as alt text only: no visible captions under pictures, house rule from taste-skill)
   figures   { title?, body?, images: [{ src, video?, caption, wide?, phones? }] }  landscape images, 2 per row;
             video = mp4 that autoplays muted (src is then the poster image)
             phones = composite of phone screens, capped in width so it isn't too tall
   arch      { title, body, layers: [[name, desc]], base, note? }   layered diagram
   decisions { title, items: [{ title, body }] }                     numbered cards */

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Paragraphs({ body }) {
    if (!body) return null;
    return (Array.isArray(body) ? body : [body]).map((p) => <p key={p}>{p}</p>);
}

function Block({ block }) {
    switch (block.type) {
        case 'text':
            return (
                <article className="cs-article">
                    <h2>{block.title}</h2>
                    <Paragraphs body={block.body} />
                </article>
            );
        case 'list':
            return (
                <article className="cs-article">
                    <h2>{block.title}</h2>
                    <Paragraphs body={block.body} />
                    <ul>{block.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </article>
            );
        case 'screens':
        case 'figures':
            return (
                <>
                    {(block.title || block.body) && (
                        <article className="cs-article">
                            {block.title && <h2>{block.title}</h2>}
                            <Paragraphs body={block.body} />
                        </article>
                    )}
                    <div className={block.type === 'screens' ? 'cs-screens' : 'cs-figures'}>
                        {block.images.map(({ src, video, caption, wide, phones }) => (
                            <figure
                                key={src}
                                className={[wide && 'cs-figures__wide', phones && 'cs-figures__phones'].filter(Boolean).join(' ') || undefined}
                            >
                                {video ? (
                                    <video
                                        src={video}
                                        poster={src}
                                        aria-label={caption}
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        autoPlay={!REDUCED_MOTION}
                                        controls={REDUCED_MOTION}
                                    />
                                ) : (
                                    <img src={src} alt={caption} loading="lazy" />
                                )}
                            </figure>
                        ))}
                    </div>
                </>
            );
        case 'arch':
            return (
                <>
                    <article className="cs-article">
                        <h2>{block.title}</h2>
                        <Paragraphs body={block.body} />
                    </article>
                    <div
                        className="cs-arch"
                        role="img"
                        aria-label={[...block.layers.map(([n]) => n), block.base].join(' → ')}
                    >
                        {block.layers.map(([name, desc]) => (
                            <div key={name} className="cs-arch__layer">
                                <code>{name}</code>
                                <p>{desc}</p>
                            </div>
                        ))}
                        <div className="cs-arch__layer cs-arch__layer--base">
                            <code>{block.base}</code>
                        </div>
                    </div>
                    {block.note && (
                        <article className="cs-article">
                            <p className="cs-note">{block.note}</p>
                        </article>
                    )}
                </>
            );
        case 'decisions':
            return (
                <>
                    <article className="cs-article">
                        <h2>{block.title}</h2>
                    </article>
                    <ol className="cs-decisions">
                        {block.items.map((d) => (
                            <li key={d.title}>
                                <h3>{d.title}</h3>
                                <p>{d.body}</p>
                            </li>
                        ))}
                    </ol>
                </>
            );
        default:
            return null;
    }
}

export default function CaseStudy({ content, meta }) {
    const { lang, toggle } = useLang();
    const [theme, toggleTheme] = useTheme();
    const c = content[lang];

    useEffect(() => {
        document.title = c.pageTitle;
    }, [c.pageTitle]);

    return (
        <div className="cs">
            <header className="cs-bar">
                <a href="/#projects" className="cs-bar__back">
                    <ArrowLeftIcon className="cs-icon" aria-hidden="true" />
                    <span>{c.back}</span>
                </a>
                <div className="cs-bar__controls">
                    <button type="button" className="cs-bar__btn" onClick={toggle} aria-label="Språk / Language">
                        {lang === 'no' ? 'EN' : 'NO'}
                    </button>
                    <button type="button" className="cs-bar__btn" onClick={toggleTheme} aria-label="Theme">
                        {theme === 'dark'
                            ? <SunIcon className="cs-icon" aria-hidden="true" />
                            : <MoonIcon className="cs-icon" aria-hidden="true" />}
                    </button>
                </div>
            </header>

            <main className="cs-main">
                <div className="cs-intro">
                    <p className="cs-eyebrow">{c.eyebrow}</p>
                    <h1 className="cs-title">{c.title}</h1>
                    <p className="cs-lede">{c.lede}</p>

                    <dl className="cs-meta">
                        {c.meta.map(([k, v]) => (
                            <div key={k}>
                                <dt>{k}</dt>
                                <dd>{v}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className="cs-stack">
                        {meta.stack.map((t) => <span key={t} className="cs-chip">{t}</span>)}
                    </div>

                    <a href={meta.githubUrl} target="_blank" rel="noreferrer" className="cs-button">
                        <CodeBracketIcon className="cs-icon" aria-hidden="true" />
                        <span>{c.github}</span>
                    </a>
                </div>

                <figure className="cs-hero">
                    <img
                        src={meta.banner}
                        alt=""
                        width={meta.bannerSize[0]}
                        height={meta.bannerSize[1]}
                        fetchpriority="high"
                    />
                </figure>

                {c.blocks.map((block, i) => <Block key={i} block={block} />)}

                <aside className="cs-cta">
                    <h2>{c.cta.title}</h2>
                    <p>{c.cta.body}</p>
                    <div className="cs-cta__actions">
                        <a href="/#contact" className="cs-button">
                            <EnvelopeIcon className="cs-icon" aria-hidden="true" />
                            <span>{c.cta.contact}</span>
                        </a>
                        <a href="/#projects" className="cs-button cs-button--ghost">
                            <ArrowLeftIcon className="cs-icon" aria-hidden="true" />
                            <span>{c.cta.back}</span>
                        </a>
                    </div>
                </aside>
            </main>

            <footer className="cs-footer">© {new Date().getFullYear()} Johannes Støen</footer>
        </div>
    );
}
