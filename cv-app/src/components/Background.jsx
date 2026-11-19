import { useLang } from '../context/langContext';
import { t as translations } from '../translations';

function Entries({ label, items }) {
    return (
        <div className="bg-col">
            <h3 className="bg-col__label">{label}</h3>
            <ol className="bg-list">
                {items.map((item) => (
                    <li key={item.title} className={item.current ? 'bg-item bg-item--current' : 'bg-item'}>
                        <span className="bg-item__period">{item.period}</span>
                        <div>
                            <p className="bg-item__title">{item.title}</p>
                            <p className="bg-item__place">{item.place}</p>
                            {item.detail && <p className="bg-item__detail">{item.detail}</p>}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default function Background() {
    const { lang } = useLang();
    const tr = translations[lang].background;

    return (
        <section id="background">
            <h2>{tr.heading}</h2>
            <div className="bg-intro">
                {tr.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="bg-cols">
                <Entries label={tr.experienceLabel} items={tr.experience} />
                <Entries label={tr.educationLabel} items={tr.education} />
            </div>
        </section>
    );
}
