const projects = [
    {
        title: 'FiskeKlar — Maritime Weather',
        description:
            'Android-app som kombinerer maritimt vær og fiskelogging. Kartlag for vind, bølger, strøm, AIS og MetAlerts, bygget med ren MVVM-arkitektur og tydelig lagdeling. Nominert til Meteorologisk institutt sin MET-pris 2025 (Team 46, IN2000).',
        tech: ['Kotlin', 'Jetpack Compose', 'MapLibre', 'Room', 'Coroutines/Flow', 'MVVM'],
    },
    {
        title: 'WorkoutTracker — iOS',
        description:
            'Treningsapp med kalenderoversikt, økt-detaljer og Apple Health-integrasjon. Støtter både styrke- og kondisjonsøkter, med enkel UDF-inspirert dataflyt og Core Data for lokal lagring.',
        tech: ['Swift', 'SwiftUI', 'HealthKit', 'Core Data', 'UDF'],
    },
    {
        title: 'UiO Master Match',
        description:
            'Nettapp som estimerer opptakspoeng til UiO-mastere basert på emner og karakterer. Semestervis oversikt, karaktervelger, statusfelt og poengsummering, med lagring i LocalStorage og fokus på enkel og rask UI.',
        tech: ['React', 'Vite', 'Tailwind', 'LocalStorage'],
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