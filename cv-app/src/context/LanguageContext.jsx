import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext({ lang: 'no', toggle: () => {} });

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

export function useLang() {
    return useContext(LanguageContext);
}
