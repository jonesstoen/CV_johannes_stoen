export const t = {
    no: {
        nav: {
            about: 'Om meg',
            education: 'Utdanning',
            experience: 'Erfaring',
            projects: 'Prosjekter',
            ariaAbout: 'Gå til Om meg-seksjon',
            ariaEducation: 'Gå til Utdanning-seksjon',
            ariaExperience: 'Gå til Erfaring-seksjon',
            ariaProjects: 'Gå til Prosjekter-seksjon',
            ariaMenu: 'Åpne meny',
            ariaTheme: 'Bytt tema',
            ariaLang: 'Switch to English',
        },
        hero: {
            subtitle: 'Informatikkstudent (PROSA)',
            roles: ['Android-utvikler', 'iOS-utvikler', 'Webutvikler', 'Masterstudent @ UiO'],
            status: 'Åpen for spennende prosjekter og muligheter',
            summary: 'Masterstudent i informatikk: programmering og systemarkitektur (PROSA) ved UiO. Tidligere bachelor i både informatikk og statsvitenskap. Erfaring som gruppelærer, butikkarbeider og førstegangstjeneste i HMKG. Spesielt interessert i å bygge praktiske løsninger innen web, mobil og plattformøkosystemer.',
            statLabels: ['Prosjekter', 'Plattformer', 'Grader'],
            email: 'E-post',
            phone: 'Telefon',
            copied: 'Kopiert!',
            download: 'Last ned CV',
            ariaDownload: 'Last ned CV som PDF',
            toast: 'E-post kopiert til utklippstavle!',
        },
        about: {
            heading: 'Om meg',
            nowLabel: 'Akkurat nå',
            now: 'Fullfører første år av masteren i informatikk ved UiO. Jobber med egne prosjekter i parallell og er åpen for spennende muligheter.',
            p1: 'Jeg er en strukturert og nysgjerrig utvikler med bakgrunn fra både informatikk og samfunnsvitenskap. Jeg trives best når jeg kan kombinere teknisk arbeid med samarbeid og formidling — enten det er i gruppeprosjekter, som gruppelærer eller ved å bygge verktøy som faktisk brukes.',
            p2: 'De siste årene har jeg jobbet med alt fra Android-apper (FiskeKlar), iOS-treningsapp (WorkoutTracker) og webprosjekter (UiO Master Match) til nettverksprogrammering i C. Jeg har også erfaring fra butikkarbeid og førstegangstjeneste i Forsvaret, noe som har gitt meg god trening i samarbeid, ansvar og å håndtere stress.',
            p3: 'Faglig er jeg spesielt interessert i arkitektur (MVVM/UDF), plattformer, og hvordan man lager gode brukeropplevelser på begrensede flater (mobil og nettbrett).',
        },
        education: {
            heading: 'Utdanning',
            items: [
                {
                    degree: 'Master, Informatikk: Programmering og Systemarkitektur (PROSA)',
                    institution: 'Universitetet i Oslo, Oslo, Norge',
                    period: '2025–2027',
                    current: true,
                },
                {
                    degree: 'Bachelor, Informatikk: Programmering og Systemarkitektur',
                    institution: 'Universitetet i Oslo, Oslo, Norge',
                    period: '2023–2025',
                },
                {
                    degree: 'Bachelor, Statsvitenskap (120 stp) + Samfunnsøkonomi (60 stp)',
                    institution: 'NTNU, Trondheim, Norge',
                    period: '2020–2023',
                },
                {
                    degree: 'Studiespesialisering',
                    institution: 'Thora Storm videregående skole, Trondheim, Norge',
                    period: '2015–2018',
                },
            ],
        },
        experience: {
            heading: 'Arbeidserfaring',
            items: [
                {
                    title: 'Teaching Assistant (IN2031)',
                    org: 'UiO, Institutt for informatikk',
                    period: 'Aug 2025 – Des 2025',
                    bullets: [
                        'Ledet ukentlige seminarer og gruppeøvelser for ca. 20 studenter i et programmeringsprosjekt-emne.',
                        'Veiledet team i utvikling av domene-spesifikke språk (DSL) med ANTLR og programvarearkitektur.',
                        'Utviklet og presenterte faglig materiale (eksempelkode, slides og øvingsoppgaver).',
                        'Samarbeidet tett med faglærer og andre gruppelærere om undervisningsopplegg.',
                        'Vurderte innleveringer og ga konstruktive tilbakemeldinger.',
                    ],
                },
                {
                    title: 'Butikkmedarbeider',
                    org: 'Joker (Samfundet Trondheim & Barcode Oslo)',
                    period: 'Jul 2020 – Sep 2025',
                    bullets: [
                        'Kundebehandling, kassearbeid og varehåndtering i travle nærbutikker.',
                        'Ansvar for svinnkontroll, ferskvarekvalitet og rutiner ved åpning/stenging.',
                        'Bisto i opplæring og veiledning av nye medarbeidere.',
                        'Utviklet gode rutiner for samarbeid, problemløsning og strukturert arbeid.',
                    ],
                },
                {
                    title: 'Førstegangstjeneste',
                    org: 'Forsvaret, HMKG (Hans Majestet Kongens Garde), Hæren',
                    period: 'Mar 2019 – Apr 2020',
                    bullets: [
                        'Fullførte førstegangstjeneste med svært gode tilbakemeldinger.',
                        'Tok initiativ, identifiserte oppgaver selvstendig og bidro aktivt til lagets oppdragsløsning.',
                        'Pålitelig og godt ansett av både sideordnede og overordnede.',
                        'Viste omsorg og støtte for medsoldater i krevende situasjoner.',
                    ],
                },
            ],
        },
        projects: {
            heading: 'Utvalgte prosjekter',
            github: 'GitHub',
            demo: 'Demo',
            descriptions: [
                'Android-app som kombinerer maritimt vær og fiskelogging. Kartlag for vind, bølger, strøm, AIS og MetAlerts, bygget med ren MVVM-arkitektur og tydelig lagdeling. Nominert til Meteorologisk institutt sin MET-pris 2025 (Team 46, IN2000).',
                'Treningsapp med kalenderoversikt, økt-detaljer og Apple Health-integrasjon. Støtter både styrke- og kondisjonsøkter, med enkel UDF-inspirert dataflyt og Core Data for lokal lagring.',
                'Nettapp som estimerer opptakspoeng til UiO-mastere basert på emner og karakterer. Semestervis oversikt, karaktervelger, statusfelt og poengsummering, med lagring i LocalStorage og fokus på enkel og rask UI.',
            ],
        },
        skills: {
            heading: 'Tekniske ferdigheter',
            levels: [
                {
                    label: 'Erfaren',
                    skills: ['Kotlin', 'Android (Jetpack Compose)', 'Java', 'MVVM', 'Git'],
                },
                {
                    label: 'God',
                    skills: ['Swift', 'SwiftUI', 'React', 'Python', 'Room', 'Coroutines/Flow', 'UDF'],
                },
                {
                    label: 'Kjennskap',
                    skills: ['C', 'Vite', 'Tailwind', 'REST', 'HTML/CSS', 'HealthKit'],
                },
            ],
            highlights: 'FiskeKlar nominert til MET-prisen (2025) · Erfaring som gruppelærer · Flere større studentprosjekter med tydelig lagdeling og arkitektur.',
        },
        footer: {
            theme: 'for tema',
            top: 'for toppen',
        },
    },

    en: {
        nav: {
            about: 'About',
            education: 'Education',
            experience: 'Experience',
            projects: 'Projects',
            ariaAbout: 'Go to About section',
            ariaEducation: 'Go to Education section',
            ariaExperience: 'Go to Experience section',
            ariaProjects: 'Go to Projects section',
            ariaMenu: 'Open menu',
            ariaTheme: 'Toggle theme',
            ariaLang: 'Bytt til norsk',
        },
        hero: {
            subtitle: 'CS Student (PROSA)',
            roles: ['Android Developer', 'iOS Developer', 'Web Developer', 'MSc Student @ UiO'],
            status: 'Open to interesting projects and opportunities',
            summary: "Master's student in computer science: programming and system architecture (PROSA) at UiO. Previously earned two bachelor's degrees in computer science and political science. Experience as a teaching assistant, retail worker and military service in HMKG. Particularly interested in building practical solutions in web, mobile and platform ecosystems.",
            statLabels: ['Projects', 'Platforms', 'Degrees'],
            email: 'Email',
            phone: 'Phone',
            copied: 'Copied!',
            download: 'Download CV',
            ariaDownload: 'Download CV as PDF',
            toast: 'Email copied to clipboard!',
        },
        about: {
            heading: 'About me',
            nowLabel: 'Right now',
            now: "Completing the first year of my master's in computer science at UiO. Working on personal projects in parallel and open to interesting opportunities.",
            p1: "I'm a structured and curious developer with a background in both computer science and social science. I thrive when I can combine technical work with collaboration and communication — whether in group projects, as a teaching assistant, or by building tools that are actually used.",
            p2: 'In recent years I have worked on everything from Android apps (FiskeKlar), an iOS fitness app (WorkoutTracker) and web projects (UiO Master Match) to network programming in C. I also have experience from retail work and military service, which gave me solid training in teamwork, responsibility and handling pressure.',
            p3: "Professionally I'm especially interested in software architecture (MVVM/UDF), platforms, and how to create good user experiences on constrained surfaces (mobile and tablet).",
        },
        education: {
            heading: 'Education',
            items: [
                {
                    degree: "Master's, Computer Science: Programming and System Architecture (PROSA)",
                    institution: 'University of Oslo, Oslo, Norway',
                    period: '2025–2027',
                    current: true,
                },
                {
                    degree: "Bachelor's, Computer Science: Programming and System Architecture",
                    institution: 'University of Oslo, Oslo, Norway',
                    period: '2023–2025',
                },
                {
                    degree: "Bachelor's, Political Science (120 credits) + Economics (60 credits)",
                    institution: 'NTNU, Trondheim, Norway',
                    period: '2020–2023',
                },
                {
                    degree: 'Upper Secondary School (Science)',
                    institution: 'Thora Storm Upper Secondary School, Trondheim, Norway',
                    period: '2015–2018',
                },
            ],
        },
        experience: {
            heading: 'Work Experience',
            items: [
                {
                    title: 'Teaching Assistant (IN2031)',
                    org: 'UiO, Department of Informatics',
                    period: 'Aug 2025 – Dec 2025',
                    bullets: [
                        'Led weekly seminars and group exercises for ~20 students in a programming project course.',
                        'Guided teams in developing domain-specific languages (DSL) with ANTLR and software architecture.',
                        'Developed and presented teaching material (example code, slides and exercises).',
                        'Collaborated closely with the lead lecturer and other teaching assistants on course design.',
                        'Assessed submissions and provided constructive feedback.',
                    ],
                },
                {
                    title: 'Retail Worker',
                    org: 'Joker (Samfundet Trondheim & Barcode Oslo)',
                    period: 'Jul 2020 – Sep 2025',
                    bullets: [
                        'Customer service, cashier work and merchandise handling in busy convenience stores.',
                        'Responsible for shrinkage control, fresh produce quality and opening/closing routines.',
                        'Assisted in onboarding and mentoring new employees.',
                        'Developed strong routines for collaboration, problem-solving and structured work.',
                    ],
                },
                {
                    title: 'Military Service',
                    org: "Norwegian Armed Forces, HMKG (His Majesty the King's Guard), Army",
                    period: 'Mar 2019 – Apr 2020',
                    bullets: [
                        'Completed mandatory military service with excellent reviews.',
                        'Took initiative, identified tasks independently and actively contributed to the team.',
                        'Reliable and highly regarded by peers and superiors.',
                        'Showed care and support for fellow soldiers in demanding situations.',
                    ],
                },
            ],
        },
        projects: {
            heading: 'Selected Projects',
            github: 'GitHub',
            demo: 'Demo',
            descriptions: [
                'Android app combining maritime weather and fishing logs. Map layers for wind, waves, currents, AIS and MetAlerts, built with clean MVVM architecture and clear layer separation. Nominated for the Norwegian Meteorological Institute MET Prize 2025 (Team 46, IN2000).',
                'Workout app with a calendar overview, session details and Apple Health integration. Supports both strength and cardio sessions, with a simple UDF-inspired data flow and Core Data for local storage.',
                "Web app that estimates admission points to UiO master's programmes based on courses and grades. Semester overview, grade selector, status fields and score summary, with LocalStorage persistence and a focus on simple, fast UI.",
            ],
        },
        skills: {
            heading: 'Technical Skills',
            levels: [
                {
                    label: 'Proficient',
                    skills: ['Kotlin', 'Android (Jetpack Compose)', 'Java', 'MVVM', 'Git'],
                },
                {
                    label: 'Competent',
                    skills: ['Swift', 'SwiftUI', 'React', 'Python', 'Room', 'Coroutines/Flow', 'UDF'],
                },
                {
                    label: 'Familiar',
                    skills: ['C', 'Vite', 'Tailwind', 'REST', 'HTML/CSS', 'HealthKit'],
                },
            ],
            highlights: 'FiskeKlar nominated for the MET Prize (2025) · Teaching assistant experience · Multiple large student projects with clear architecture and layer separation.',
        },
        footer: {
            theme: 'for theme',
            top: 'for top',
        },
    },
};
