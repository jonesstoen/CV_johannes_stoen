import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

function Education() {
    const { lang } = useLang();
    const tr = translations[lang].education;

    return (
        <section id="education">
            <h2>{tr.heading}</h2>
            <div className="edu-timeline">
                {tr.items.map((item) => (
                    <div key={item.degree} className="edu-timeline__item">
                        <div className={`edu-timeline__dot${item.current ? ' edu-timeline__dot--active' : ''}`} />
                        <div className="edu-timeline__content">
                            <span className="edu-timeline__period">{item.period}</span>
                            <p className="edu-timeline__degree">{item.degree}</p>
                            <p className="edu-timeline__institution">{item.institution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
