import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Tilbake til toppen"
        >
            <ArrowUpIcon className="back-to-top__icon" />
        </button>
    );
}

