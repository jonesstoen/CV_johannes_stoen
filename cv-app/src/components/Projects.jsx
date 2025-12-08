const projects = [
    {
        title: 'MasterMatch – UiO master planner',
        description:
            'Webapp i React/Vite som hjelper studenter å sjekke opptakskrav til masterprogrammer.',
        tech: ['React', 'Vite', 'JavaScript'],
    },
    {
        title: 'Fiskeklar – IN2000 weather app',
        description:
            'Android-app for hobbyfiskere med kartlag for vind, bølger, strøm og værvarsler.',
        tech: ['Kotlin', 'Jetpack Compose', 'MapLibre'],
    },
    {
        title: 'Workout Tracker',
        description: 'Enkel treningslogg med støtte for styrke- og kondisjonsøkter.',
        tech: ['React', 'TypeScript'],
    },
];

function Projects() {
    return (
        <section id="projects">
            <h2>Utvalgte prosjekter</h2>
            <div className="projects">
                {projects.map((project) => (
                    <article key={project.title} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-card__tech">
                            {project.tech.map((tag) => (
                                <span key={tag} className="tag">
                  {tag}
                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;