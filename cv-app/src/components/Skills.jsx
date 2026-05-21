import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

function Skills() {
    const { lang } = useLang();
    const tr = translations[lang].skills;

    return (
        <section id="skills">
            <h2>{tr.heading}</h2>
            <div className="skills">
                {tr.levels.map((level, i) => (
                    <div key={level.label} className={`skill-category skill-category--level-${i + 1}`}>
                        <h3>{level.label}</h3>
                        <div className="skill-tags">
                            {level.skills.map((skill) => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="skill-category skill-category--highlight">
                    <h3>Highlights</h3>
                    <p className="skill-category__highlight-text">{tr.highlights}</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;
