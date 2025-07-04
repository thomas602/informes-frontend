import React, { useEffect, useState } from 'react';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
    message: string;
    isActive: boolean;
    onClose?: () => void;
    duration?: number; // ms, default: 4000
    variant?: ToastVariant; // default: 'info'
    position?:
        | 'top-right'
        | 'top-left'
        | 'bottom-right'
        | 'bottom-left'
        | 'top-center'
        | 'bottom-center';
    showIcon?: boolean;
    showCloseButton?: boolean;
    className?: string;
}

const Toast: React.FC<ToastProps> = ({
    message,
    isActive,
    onClose,
    duration = 4000,
    variant = 'info',
    position = 'top-right',
    showIcon = true,
    showCloseButton = false,
    className = '',
}) => {
    const [visible, setVisible] = useState(isActive);

    useEffect(() => {
        let showTimeout: ReturnType<typeof setTimeout>;
        let hideTimeout: ReturnType<typeof setTimeout>;

        if (isActive) {
            setVisible(true);
            // Start fade out just before hiding
            hideTimeout = setTimeout(() => setVisible(false), duration - 300);
            // Call onClose after duration
            showTimeout = setTimeout(() => {
                setVisible(false);
                onClose && onClose();
            }, duration);
        } else {
            setVisible(false);
        }

        return () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
        };
    }, [isActive, duration, onClose]);

    // Ensure visible state is always in sync with isActive
    useEffect(() => {
        setVisible(isActive);
    }, [isActive]);

    const getVariantStyles = () => {
        const baseStyles =
            'min-w-[280px] max-w-sm rounded-lg shadow-lg border px-4 py-3 flex items-center gap-3';

        switch (variant) {
            case 'success':
                return `${baseStyles} bg-green-50 border-green-200 text-green-800`;
            case 'error':
                return `${baseStyles} bg-red-50 border-red-200 text-red-800`;
            case 'warning':
                return `${baseStyles} bg-yellow-50 border-yellow-200 text-yellow-800`;
            case 'info':
            default:
                return `${baseStyles} bg-blue-50 border-blue-200 text-blue-800`;
        }
    };

    const getPositionStyles = () => {
        const baseStyles = 'fixed z-50 transition-all duration-300 ease-in-out';

        switch (position) {
            case 'top-left':
                return `${baseStyles} top-6 left-6`;
            case 'top-center':
                return `${baseStyles} top-6 left-1/2 transform -translate-x-1/2`;
            case 'top-right':
                return `${baseStyles} top-6 right-6`;
            case 'bottom-left':
                return `${baseStyles} bottom-6 left-6`;
            case 'bottom-center':
                return `${baseStyles} bottom-6 left-1/2 transform -translate-x-1/2`;
            case 'bottom-right':
                return `${baseStyles} bottom-6 right-6`;
            default:
                return `${baseStyles} top-6 right-6`;
        }
    };

    const getIcon = () => {
        if (!showIcon) return null;

        const iconClasses = 'w-5 h-5 flex-shrink-0';

        switch (variant) {
            case 'success':
                return (
                    <svg
                        className={`${iconClasses} text-green-600`}
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                        />
                    </svg>
                );
            case 'error':
                return (
                    <svg
                        className={`${iconClasses} text-red-600`}
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                            clipRule='evenodd'
                        />
                    </svg>
                );
            case 'warning':
                return (
                    <svg
                        className={`${iconClasses} text-yellow-600`}
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path
                            fillRule='evenodd'
                            d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                            clipRule='evenodd'
                        />
                    </svg>
                );
            case 'info':
            default:
                return (
                    <svg
                        className={`${iconClasses} text-blue-600`}
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                            clipRule='evenodd'
                        />
                    </svg>
                );
        }
    };

    const handleClose = () => {
        setVisible(false);
        onClose && onClose();
    };

    return (
        <div
            className={`${getPositionStyles()} ${className}`}
            style={{
                opacity: visible && isActive ? 1 : 0,
                transform: visible && isActive ? 'translateY(0)' : 'translateY(-10px)',
            }}
            aria-live='polite'
            aria-atomic='true'>
            <div className={`${getVariantStyles()} pointer-events-auto`}>
                {getIcon()}

                <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium leading-5'>{message}</p>
                </div>

                {showCloseButton && (
                    <button
                        onClick={handleClose}
                        className='flex-shrink-0 ml-2 p-1 rounded-md hover:bg-black hover:bg-opacity-10 transition-colors duration-200'
                        aria-label='Close toast'>
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                            <path
                                fillRule='evenodd'
                                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Toast;
