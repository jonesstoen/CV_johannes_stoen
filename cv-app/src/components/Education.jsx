import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

function Education() {
    const { lang } = useLang();
    const tr = translations[lang].education;

    return (
        <section id="education">
            <h2>{tr.heading}</h2>
            <ul className="timeline">
                {tr.items.map((item, i) => (
                    <li key={item.degree} className="timeline__item">
                        <div className="timeline__gutter">
                            <div className={`timeline__dot${item.current ? ' timeline__dot--active' : ''}`} />
                            {i < tr.items.length - 1 && <div className="timeline__connector" />}
                        </div>
                        <div className="timeline__content">
                            <div className="timeline__header">
                                <div>
                                    <p className="timeline__title">{item.degree}</p>
                                    <p className="timeline__subtitle">{item.institution}</p>
                                </div>
                                <span className="timeline__period">{item.period}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Education;
