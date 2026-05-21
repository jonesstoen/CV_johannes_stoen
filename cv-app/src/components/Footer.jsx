import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

function Footer() {
    const { lang } = useLang();
    const tr = translations[lang].footer;

    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Johannes Støen</p>
            <p className="footer__hint">
                <kbd>T</kbd> {tr.theme} · <kbd>H</kbd> {tr.top} · <kbd>L</kbd> EN/NO · <kbd>⌘K</kbd> {tr.cmd}
            </p>
        </footer>
    );
}

export default Footer;
