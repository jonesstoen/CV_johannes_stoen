import { useState, useEffect } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const totalScrollable = documentHeight - windowHeight;
            const progress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
        };

        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        updateScrollProgress();

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="scroll-progress">
            <div
                className="scroll-progress__bar"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
}

