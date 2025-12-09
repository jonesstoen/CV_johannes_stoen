import { useState } from 'react';
import portrait from "../assets/portrait.png";
import {
    EnvelopeIcon,
    PhoneIcon,
    CodeBracketIcon,
    LinkIcon,
    ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import Toast from './Toast';

export default function Hero() {
    const [emailCopied, setEmailCopied] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const email = 'jonesstoen@gmail.com';

    const copyEmailToClipboard = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(email);
            setEmailCopied(true);
            setShowToast(true);
            setTimeout(() => {
                setEmailCopied(false);
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setEmailCopied(true);
                setShowToast(true);
                setTimeout(() => {
                    setEmailCopied(false);
                }, 2000);
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
                        alt="Johannes Støen - Informatikkstudent og utvikler"
                        className="hero__portrait"
                        loading="lazy"
                        decoding="async"
                        width="140"
                        height="140"
                    />
                </div>

                <h1 className="hero__name">Johannes Støen</h1>

                <p className="hero__title">
                    Informatikkstudent (PROSA) · Utvikler
                </p>

                <p className="hero__summary">
                    Masterstudent i informatikk: programmering og systemarkitektur (PROSA) ved UiO.
                    Tidligere bachelor i både informatikk og statsvitenskap. Erfaring som
                    gruppelærer, butikkarbeider og førstegangstjeneste i HMKG. Spesielt interessert
                    i å bygge praktiske løsninger innen web, mobil og plattformøkosystemer.
                </p>

                <div className="hero__links">
                    <button
                        type="button"
                        onClick={copyEmailToClipboard}
                        className={`hero__link ${emailCopied ? 'hero__link--copied' : ''}`}
                        aria-label={`Kopier e-postadresse: ${email}`}
                    >
                        {emailCopied ? (
                            <>
                                <ClipboardDocumentCheckIcon className="hero__icon" />
                                <span>Kopiert!</span>
                            </>
                        ) : (
                            <>
                                <EnvelopeIcon className="hero__icon" />
                                <span>E-post</span>
                            </>
                        )}
                    </button>

                    <a
                        href="tel:+4793859648"
                        className="hero__link"
                    >
                        <PhoneIcon className="hero__icon" />
                        <span>Telefon</span>
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
                </div>
            </div>
            <Toast
                message="E-post kopiert til utklippstavle!"
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </header>
    );
}