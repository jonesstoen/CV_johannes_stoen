import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

const LEVEL_WIDTHS = ['87%', '63%', '40%'];

function Skills() {
    const { lang } = useLang();
    const tr = translations[lang].skills;

    const groups = tr.levels.map((level, i) => ({
        label: level.label,
        skills: level.skills,
        width: LEVEL_WIDTHS[i],
    }));

    return (
        <section id="skills">
            <h2>{tr.heading}</h2>
            <div className="skill-groups">
                {groups.map(({ label, skills, width }) => (
                    <div key={label} className="skill-group">
                        <div className="skill-group__header">
                            <span className="skill-group__label">{label}</span>
                            <div className="skill-group__track">
                                <div
                                    className="skill-group__fill"
                                    style={{ '--bar-target': width }}
                                />
                            </div>
                        </div>
                        <p className="skill-group__list">{skills.join(' · ')}</p>
                    </div>
                ))}
                <div className="skill-group skill-group--langs">
                    <div className="skill-group__header">
                        <span className="skill-group__label">{tr.languagesLabel}</span>
                        <div className="skill-group__lang-tags">
                            {tr.languages.map((lang) => (
                                <span key={lang} className="tag">{lang}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <p className="skills__highlights">{tr.highlights}</p>
        </section>
    );
}

export default Skills;
