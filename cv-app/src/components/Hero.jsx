import portrait from "../assets/portrait.png";
import {
    EnvelopeIcon,
    PhoneIcon,
    CodeBracketIcon,
    LinkIcon,
} from "@heroicons/react/24/outline";

function Hero() {
    return (
        <header className="hero">
            {/* Profilbilde */}
            <div className="hero__portrait-wrapper">
                <img
                    src={portrait}
                    alt="Johannes Støen"
                    className="hero__portrait"
                />
            </div>

            {/* Tekstinnhold */}
            <div className="hero__content">
                <h1 className="hero__name">Johannes Støen</h1>

                <p className="hero__title">
                    Informatikkstudent (PROSA) · Utvikler
                </p>

                <p className="hero__summary">
                    Masterstudent i informatikk: programmering og systemarkitektur
                    (PROSA) ved UiO. Tidligere bachelor i både informatikk og
                    statsvitenskap. Erfaring som gruppelærer, butikkarbeider og
                    førstegangstjeneste i HMKG. Spesielt interessert i å bygge
                    praktiske løsninger innen web, mobil og plattformøkosystemer.
                </p>

                {/* Kontaktknapper */}
                <div className="hero__links">
                    <a href="mailto:jonesstoen@gmail.com" className="hero__link">
                        <EnvelopeIcon className="hero__icon" />
                        E-post
                    </a>

                    <a href="tel:+4793859648" className="hero__link">
                        <PhoneIcon className="hero__icon" />
                        Telefon
                    </a>

                    <a
                        href="https://github.com/jonesstoen"
                        target="_blank"
                        rel="noreferrer"
                        className="hero__link"
                    >
                        <CodeBracketIcon className="hero__icon" />
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/johannes-støen-572a83206/"
                        target="_blank"
                        rel="noreferrer"
                        className="hero__link"
                    >
                        <LinkIcon className="hero__icon" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Hero;