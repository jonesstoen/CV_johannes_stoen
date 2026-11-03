import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

function About() {
    const { lang } = useLang();
    const tr = translations[lang].about;

    return (
        <section id="about">
            <h2>{tr.heading}</h2>
            <div className="about__meta">
                {tr.details.map(({ key, value }) => (
                    <div key={key} className="about__meta-item">
                        <span className="about__meta-key">{key}</span>
                        <span className="about__meta-value">{value}</span>
                    </div>
                ))}
            </div>
            <div className="about__now">
                <span className="about__now-label">{tr.nowLabel}</span>
                <p>{tr.now}</p>
            </div>
            <p className="about__text">{tr.p1}</p>
        </section>
    );
}

export default About;
