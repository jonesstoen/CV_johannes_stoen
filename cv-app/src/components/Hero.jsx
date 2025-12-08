import portrait from '../assets/portrait.png';

function Hero() {
    return (
        <header className="hero">
            <img src={portrait} alt="Johannes Støen" className="hero__portrait" />
            <div>
                <h1>Johannes Støen</h1>
                <p className="hero__title">
                    Informatikkstudent · Utvikler · Systemarkitektur
                </p>
                <p className="hero__summary">
                    Masterstudent i informatikk (programmering og systemarkitektur) ved UiO.
                    Interessert i web, app-utvikling og plattformøkosystemer.
                </p>

                <div className="hero__links">
                    <a href="mailto:johannesstoen@gmail.com">E-post</a>
                    <a href="https://github.com/jonesstoen" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Hero;