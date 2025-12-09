import { useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import './Toast.css';

export default function Toast({ message, isVisible, onClose }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="toast" role="alert" aria-live="polite">
            <CheckCircleIcon className="toast__icon" />
            <span className="toast__message">{message}</span>
        </div>
    );
}

