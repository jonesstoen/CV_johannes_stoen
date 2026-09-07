import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

function Skills() {
    const { lang } = useLang();
    const tr = translations[lang].skills;

    return (
        <section id="skills">
            <h2>{tr.heading}</h2>
            <div className="skill-groups">
                {tr.levels.map(({ label, skills }) => (
                    <div key={label} className="skill-group">
                        <span className="skill-group__label">{label}</span>
                        <div className="skill-group__chips">
                            {skills.map((skill) => (
                                <span key={skill} className="tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="skill-group">
                    <span className="skill-group__label">{tr.languagesLabel}</span>
                    <div className="skill-group__chips">
                        {tr.languages.map((lang) => (
                            <span key={lang} className="tag">{lang}</span>
                        ))}
                    </div>
                </div>
            </div>
            <p className="skills__highlights">{tr.highlights}</p>
        </section>
    );
}

export default Skills;
