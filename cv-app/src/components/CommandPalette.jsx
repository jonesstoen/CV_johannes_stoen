import { useState, useEffect, useRef } from 'react';
import {
    UserIcon, AcademicCapIcon, BriefcaseIcon, RocketLaunchIcon,
    EnvelopeIcon, CodeBracketIcon, SunIcon, MoonIcon, GlobeAltIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useLang } from '../context/LanguageContext';
import { t as translations } from '../translations';

export default function CommandPalette({ theme, setTheme, onClose }) {
    const { lang, toggle: toggleLang } = useLang();
    const tr = translations[lang];
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(0);
    const inputRef = useRef(null);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
        onClose();
    };

    const navItems = [
        { label: tr.nav.about,      icon: UserIcon,          action: () => scrollTo('about') },
        { label: tr.nav.education,  icon: AcademicCapIcon,   action: () => scrollTo('education') },
        { label: tr.nav.experience, icon: BriefcaseIcon,     action: () => scrollTo('experience') },
        { label: tr.nav.projects,   icon: RocketLaunchIcon,  action: () => scrollTo('projects') },
        { label: tr.cmd.skills,     icon: CodeBracketIcon,   action: () => scrollTo('skills') },
        { label: tr.nav.contact,    icon: EnvelopeIcon,      action: () => scrollTo('contact') },
    ];

    const actionItems = [
        {
            label: theme === 'dark' ? tr.cmd.themeLight : tr.cmd.themeDark,
            icon: theme === 'dark' ? SunIcon : MoonIcon,
            hint: 'T',
            action: () => { setTheme(t => t === 'dark' ? 'light' : 'dark'); onClose(); },
        },
        {
            label: lang === 'no' ? tr.cmd.langEn : tr.cmd.langNo,
            icon: GlobeAltIcon,
            hint: 'L',
            action: () => { toggleLang(); onClose(); },
        },
    ];

    const allGroups = [
        { group: tr.cmd.navigate, items: navItems },
        { group: tr.cmd.actions,  items: actionItems },
    ];

    const q = query.toLowerCase();
    const filtered = query
        ? allGroups
            .map(g => ({ ...g, items: g.items.filter(i => i.label.toLowerCase().includes(q)) }))
            .filter(g => g.items.length > 0)
        : allGroups;

    let idx = 0;
    const groups = filtered.map(g => ({
        ...g,
        items: g.items.map(item => ({ ...item, idx: idx++ })),
    }));
    const flatItems = groups.flatMap(g => g.items);

    useEffect(() => { inputRef.current?.focus(); }, []);
    useEffect(() => { setSelected(0); }, [query]);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, flatItems.length - 1)); }
            if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
            if (e.key === 'Enter')     flatItems[selected]?.action();
            if (e.key === 'Escape')    onClose();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [flatItems, selected, onClose]);

    return (
        <div className="cmd-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={tr.cmd.placeholder}>
            <div className="cmd-palette" onClick={e => e.stopPropagation()}>
                <div className="cmd-search">
                    <MagnifyingGlassIcon className="cmd-search__icon" aria-hidden="true" />
                    <input
                        ref={inputRef}
                        className="cmd-input"
                        placeholder={tr.cmd.placeholder}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <kbd className="cmd-close-hint">esc</kbd>
                </div>
                <ul className="cmd-list" role="listbox">
                    {groups.map(group => (
                        <li key={group.group}>
                            <p className="cmd-group-label">{group.group}</p>
                            <ul>
                                {group.items.map(item => (
                                    <li
                                        key={item.label}
                                        className={`cmd-item${item.idx === selected ? ' cmd-item--selected' : ''}`}
                                        onClick={item.action}
                                        onMouseEnter={() => setSelected(item.idx)}
                                        role="option"
                                        aria-selected={item.idx === selected}
                                    >
                                        <item.icon className="cmd-item__icon" aria-hidden="true" />
                                        <span className="cmd-item__label">{item.label}</span>
                                        {item.hint && <kbd className="cmd-item__hint">{item.hint}</kbd>}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    {flatItems.length === 0 && (
                        <li className="cmd-empty">{lang === 'no' ? 'Ingen treff' : 'No results'}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}
