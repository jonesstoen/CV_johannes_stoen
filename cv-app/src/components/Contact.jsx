import { useState } from 'react';
import { useLang } from '../context/langContext';
import { t as translations } from '../translations';

// Public Web3Forms key: safe to ship in client code, it can only deliver to the registered inbox.
const WEB3FORMS_KEY = 'f603c708-67d0-4411-b98b-01589f1d872a';
const EMPTY_FORM = { name: '', email: '', message: '' };

function Contact() {
    const { lang } = useLang();
    const tr = translations[lang].contact;
    const [form, setForm] = useState(EMPTY_FORM);
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const update = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
        if (status === 'sent' || status === 'error') setStatus('idle');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `${tr.subjectPrefix} ${form.name}`,
                    from_name: form.name,
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    botcheck: e.target.botcheck.checked,
                }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.message);
            setStatus('sent');
            setForm(EMPTY_FORM);
        } catch {
            setStatus('error');
        }
    };

    const subtext =
        status === 'sent' ? tr.sent : status === 'error' ? tr.error : tr.subtext;

    return (
        <section id="contact">
            <h2>{tr.heading}</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                {/* Honeypot: hidden from humans, bots tick it and get filtered by Web3Forms */}
                <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ display: 'none' }}
                />
                <div className="contact-form__row">
                    <input
                        type="text"
                        placeholder={tr.namePlaceholder}
                        aria-label={tr.namePlaceholder}
                        value={form.name}
                        onChange={update('name')}
                        className="contact-form__input"
                        required
                        autoComplete="name"
                    />
                    <input
                        type="email"
                        placeholder={tr.emailPlaceholder}
                        aria-label={tr.emailPlaceholder}
                        value={form.email}
                        onChange={update('email')}
                        className="contact-form__input"
                        required
                        autoComplete="email"
                    />
                </div>
                <textarea
                    placeholder={tr.messagePlaceholder}
                    aria-label={tr.messagePlaceholder}
                    value={form.message}
                    onChange={update('message')}
                    className="contact-form__textarea"
                    rows={5}
                    required
                />
                <div className="contact-form__footer">
                    <p
                        className={`contact-form__subtext contact-form__subtext--${status}`}
                        role="status"
                        aria-live="polite"
                    >
                        {subtext}
                        {status === 'error' && (
                            <>
                                {' '}
                                <a href="mailto:jonesstoen@gmail.com">jonesstoen@gmail.com</a>
                            </>
                        )}
                    </p>
                    <button
                        type="submit"
                        className="contact-form__submit"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? tr.sending : tr.send}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
