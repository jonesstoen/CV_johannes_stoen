export default function StructuredData() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Johannes Støen',
        jobTitle: 'Informatikkstudent & Utvikler',
        description:
            'Masterstudent i informatikk: programmering og systemarkitektur (PROSA) ved UiO. Erfaring med Android, iOS og web-utvikling.',
        email: 'jonesstoen@gmail.com',
        telephone: '+4793859648',
        url: 'https://jonesstoen.github.io',
        sameAs: [
            'https://github.com/jonesstoen',
            'https://www.linkedin.com/in/johannes-støen-572a83206/',
        ],
        alumniOf: [
            {
                '@type': 'EducationalOrganization',
                name: 'Universitetet i Oslo',
                description: 'Master i informatikk: programmering og systemarkitektur (PROSA)',
            },
            {
                '@type': 'EducationalOrganization',
                name: 'NTNU',
                description: 'Bachelor i statsvitenskap og samfunnsøkonomi',
            },
        ],
        knowsAbout: [
            'Kotlin',
            'Java',
            'Python',
            'Android Development',
            'iOS Development',
            'React',
            'Web Development',
            'Mobile Development',
            'MVVM',
            'UDF',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}

