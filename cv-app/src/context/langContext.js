import { createContext, useContext } from 'react';

export const LanguageContext = createContext({ lang: 'no', toggle: () => {} });

export function useLang() {
    return useContext(LanguageContext);
}
