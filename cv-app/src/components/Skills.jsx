import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

const LEVEL_WIDTHS = ['87%', '63%', '40%'];

function Skills() {
    const { lang } = useLang();
    const tr = translations[lang].skills;

    const groups = [
        ...tr.levels.map((level, i) => ({
            label: level.label,
            skills: level.skills,
            width: LEVEL_WIDTHS[i],
        })),
        { label: tr.languagesLabel, skills: tr.languages, width: '100%' },
    ];

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
            </div>
            <p className="skills__highlights">{tr.highlights}</p>
        </section>
    );
}

export default Skills;
