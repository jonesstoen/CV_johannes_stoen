function Skills() {
    const skillCategories = [
        {
            title: 'Språk & backend',
            skills: ['Kotlin', 'Java', 'Python', 'C (nettverk/sockets)'],
        },
        {
            title: 'App & frontend',
            skills: [
                'Android (Jetpack Compose)',
                'iOS (SwiftUI / HealthKit)',
                'React',
                'Vite',
                'Tailwind',
                'HTML/CSS',
            ],
        },
        {
            title: 'Arkitektur & verktøy',
            skills: ['REST', 'MVVM', 'UDF', 'Room', 'Coroutines/Flow', 'Git', 'GitHub'],
        },
    ];

    return (
        <section id="skills">
            <h2>Tekniske ferdigheter</h2>
            <div className="skills">
                {skillCategories.map((category) => (
                    <div key={category.title} className="skill-category">
                        <h3>{category.title}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill) => (
                                <span key={skill} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="skill-category skill-category--highlight">
                    <h3>Highlights</h3>
                    <p>
                        FiskeKlar nominert til MET-prisen (2025) · Erfaring som gruppelærer · Flere
                        større studentprosjekter med tydelig lagdeling og arkitektur.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Skills;