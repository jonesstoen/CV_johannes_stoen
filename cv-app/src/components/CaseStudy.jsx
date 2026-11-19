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

export default function CaseStudy({ content, meta }) {
    const { lang, toggle } = useLang();
    const [theme, toggleTheme] = useTheme();
    const c = content[lang];
    const s = c.sections;

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
                    <img src={meta.banner} alt="" width="1000" height="640" fetchpriority="high" />
                </figure>

                <ul className="cs-stats">
                    {c.stats.map(([n, label]) => (
                        <li key={label}>
                            <strong>{n}</strong>
                            <span>{label}</span>
                        </li>
                    ))}
                </ul>

                <article className="cs-article">
                    <h2>{s.problem.title}</h2>
                    {s.problem.body.map((p) => <p key={p}>{p}</p>)}

                    <h2>{s.screens.title}</h2>
                    <p>{s.screens.body}</p>
                </article>

                <div className="cs-screens">
                    {meta.screens.map((src, i) => (
                        <figure key={src}>
                            <img src={src} alt={s.screens.captions[i]} loading="lazy" width="450" height="979" />
                            <figcaption>{s.screens.captions[i]}</figcaption>
                        </figure>
                    ))}
                </div>

                <article className="cs-article">
                    <h2>{s.architecture.title}</h2>
                    <p>{s.architecture.body}</p>
                </article>

                <div className="cs-arch" role="img" aria-label={s.architecture.layers.map(([n]) => n).join(' → ') + ' → ' + s.architecture.server}>
                    {s.architecture.layers.map(([name, desc]) => (
                        <div key={name} className="cs-arch__layer">
                            <code>{name}</code>
                            <p>{desc}</p>
                        </div>
                    ))}
                    <div className="cs-arch__layer cs-arch__layer--server">
                        <code>{s.architecture.server}</code>
                    </div>
                </div>

                <article className="cs-article">
                    <p className="cs-note">{s.architecture.note}</p>

                    <h2>{s.decisions.title}</h2>
                </article>

                <ol className="cs-decisions">
                    {s.decisions.items.map((d) => (
                        <li key={d.title}>
                            <h3>{d.title}</h3>
                            <p>{d.body}</p>
                        </li>
                    ))}
                </ol>

                <article className="cs-article">
                    <h2>{s.security.title}</h2>
                    <ul>{s.security.items.map((i) => <li key={i}>{i}</li>)}</ul>

                    <h2>{s.process.title}</h2>
                    {s.process.body.map((p) => <p key={p}>{p}</p>)}

                    <h2>{s.gaps.title}</h2>
                    <ul>{s.gaps.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </article>

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
