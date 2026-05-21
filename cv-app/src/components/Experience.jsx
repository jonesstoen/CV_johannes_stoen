import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

function Experience() {
    const { lang } = useLang();
    const tr = translations[lang].experience;

    return (
        <section id="experience">
            <h2>{tr.heading}</h2>
            <ul className="timeline">
                {tr.items.map((item, i) => (
                    <li key={item.title} className="timeline__item">
                        <div className="timeline__gutter">
                            <div className="timeline__dot" />
                            {i < tr.items.length - 1 && <div className="timeline__connector" />}
                        </div>
                        <div className="timeline__content">
                            <div className="timeline__header">
                                <div>
                                    <p className="timeline__title">{item.title}</p>
                                    <p className="timeline__subtitle">{item.org}</p>
                                </div>
                                <span className="timeline__period">{item.period}</span>
                            </div>
                            <ul className="timeline__bullets">
                                {item.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Experience;
