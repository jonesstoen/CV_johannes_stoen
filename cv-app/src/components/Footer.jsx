function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Johannes Støen</p>
            <p className="footer__hint">
                <kbd>T</kbd> for tema · <kbd>H</kbd> for toppen
            </p>
        </footer>
    );
}

export default Footer;