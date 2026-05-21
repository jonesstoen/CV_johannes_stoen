import { useState, useEffect } from 'react';
import portrait from "../assets/portrait.jpg";
import {
    EnvelopeIcon,
    PhoneIcon,
    CodeBracketIcon,
    LinkIcon,
    ClipboardDocumentCheckIcon,
    ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import Toast from './Toast';
import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

export default function Hero() {
    const { lang } = useLang();
    const tr = translations[lang].hero;

    const [roleIdx, setRoleIdx] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);

    useEffect(() => {
        const roles = translations[lang].hero.roles;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setTypedText(roles[0]);
            return;
        }
        const target = roles[roleIdx % roles.length];
        let id;
        if (!deleting && typedText.length < target.length) {
            id = setTimeout(() => setTypedText(target.slice(0, typedText.length + 1)), 75);
        } else if (!deleting) {
            id = setTimeout(() => setDeleting(true), 2200);
        } else if (typedText.length > 0) {
            id = setTimeout(() => setTypedText(target.slice(0, typedText.length - 1)), 35);
        } else {
            setDeleting(false);
            setRoleIdx((i) => (i + 1) % roles.length);
        }
        return () => clearTimeout(id);
    }, [typedText, deleting, roleIdx, lang]);
    const [showToast, setShowToast] = useState(false);
    const email = 'jonesstoen@gmail.com';

    const copyEmailToClipboard = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(email);
            setEmailCopied(true);
            setShowToast(true);
            setTimeout(() => setEmailCopied(false), 2000);
        } catch {
            const textArea = document.createElement('textarea');
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setEmailCopied(true);
                setShowToast(true);
                setTimeout(() => setEmailCopied(false), 2000);
            } catch (fallbackErr) {
                console.error('Failed to copy email:', fallbackErr);
            }
            document.body.removeChild(textArea);
        }
    };

    return (
        <header className="hero">
            <div className="hero__inner">
                <div className="hero__portrait-wrapper">
                    <img
                        src={portrait}
                        alt="Johannes Støen"
                        className="hero__portrait"
                        loading="eager"
                        decoding="async"
                        width="120"
                        height="120"
                    />
                </div>

                <div className="hero__body">
                    <h1 className="hero__name">Johannes <span className="hero__name-accent">Støen</span></h1>
                    <p className="hero__title">
                        {tr.subtitle} ·{' '}
                        <span className="hero__typewriter" aria-live="polite">
                            {typedText}
                            <span className="hero__cursor" aria-hidden="true" />
                        </span>
                    </p>

                    <div className="hero__status">
                        <span className="hero__status-dot" aria-hidden="true" />
                        {tr.status}
                    </div>

                    <p className="hero__summary">{tr.summary}</p>

                    <div className="hero__links">
                        <button
                            type="button"
                            onClick={copyEmailToClipboard}
                            className={`hero__link ${emailCopied ? 'hero__link--copied' : ''}`}
                            aria-label={`${tr.email}: ${email}`}
                        >
                            {emailCopied ? (
                                <>
                                    <ClipboardDocumentCheckIcon className="hero__icon" />
                                    <span>{tr.copied}</span>
                                </>
                            ) : (
                                <>
                                    <EnvelopeIcon className="hero__icon" />
                                    <span>{tr.email}</span>
                                </>
                            )}
                        </button>

                        <a href="tel:+4793859648" className="hero__link">
                            <PhoneIcon className="hero__icon" />
                            <span>{tr.phone}</span>
                        </a>

                        <a
                            href="https://github.com/jonesstoen"
                            target="_blank"
                            rel="noreferrer"
                            className="hero__link"
                        >
                            <CodeBracketIcon className="hero__icon" />
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/johannes-støen-572a83206/"
                            target="_blank"
                            rel="noreferrer"
                            className="hero__link"
                        >
                            <LinkIcon className="hero__icon" />
                            <span>LinkedIn</span>
                        </a>

                        <button
                            type="button"
                            onClick={() => window.print()}
                            className="hero__link hero__link--download"
                            aria-label={tr.ariaDownload}
                        >
                            <ArrowDownTrayIcon className="hero__icon" />
                            <span>{tr.download}</span>
                        </button>
                    </div>
                </div>
            </div>
            <Toast
                message={tr.toast}
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </header>
    );
}
