import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

function Contact() {
    const { lang } = useLang();
    const tr = translations[lang].contact;
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(
            lang === 'no' ? `Kontakt fra ${form.name}` : `Contact from ${form.name}`
        );
        const body = encodeURIComponent(
            `${lang === 'no' ? 'Fra' : 'From'}: ${form.name}\n${lang === 'no' ? 'E-post' : 'Email'}: ${form.email}\n\n${form.message}`
        );
        window.location.href = `mailto:jonesstoen@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact">
            <h2>{tr.heading}</h2>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="contact-form__row">
                    <input
                        type="text"
                        placeholder={tr.namePlaceholder}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="contact-form__input"
                        required
                        autoComplete="name"
                    />
                    <input
                        type="email"
                        placeholder={tr.emailPlaceholder}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="contact-form__input"
                        required
                        autoComplete="email"
                    />
                </div>
                <textarea
                    placeholder={tr.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="contact-form__textarea"
                    rows={5}
                    required
                />
                <div className="contact-form__footer">
                    <p className="contact-form__subtext">{tr.subtext}</p>
                    <button type="submit" className="contact-form__submit">
                        {tr.send}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
