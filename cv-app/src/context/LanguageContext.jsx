import { useEffect, useState } from 'react';
import { LanguageContext } from './langContext';

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(
        () => localStorage.getItem('cv-lang') || 'no'
    );

    useEffect(() => {
        document.documentElement.lang = lang;
        localStorage.setItem('cv-lang', lang);
    }, [lang]);

    const toggle = () => setLang((l) => (l === 'no' ? 'en' : 'no'));

    return (
        <LanguageContext.Provider value={{ lang, toggle }}>
            {children}
        </LanguageContext.Provider>
    );
}
