import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

function About() {
    const { lang } = useLang();
    const tr = translations[lang].about;

    return (
        <section id="about">
            <h2>{tr.heading}</h2>
            <div className="about__now">
                <span className="about__now-label">{tr.nowLabel}</span>
                <p>{tr.now}</p>
            </div>
            <p>{tr.p1}</p>
            <p>{tr.p2}</p>
            <p>{tr.p3}</p>
        </section>
    );
}

export default About;
