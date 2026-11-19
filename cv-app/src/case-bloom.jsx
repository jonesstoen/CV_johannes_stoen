import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/space-grotesk';
import './index.css';
import './styles/tokens.css';
import './styles/case-study.css';
import './styles/buttons.css';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import { bloom, bloomMeta } from './caseStudies/bloom.js';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ErrorBoundary>
            <LanguageProvider>
                <CaseStudy content={bloom} meta={bloomMeta} />
            </LanguageProvider>
        </ErrorBoundary>
    </StrictMode>,
);
