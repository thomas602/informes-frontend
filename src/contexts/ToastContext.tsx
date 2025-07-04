import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import Toast, { type ToastVariant } from '../components/Toast';

export interface ToastItem {
    id: string;
    message: string;
    variant: ToastVariant;
    position:
        | 'top-right'
        | 'top-left'
        | 'bottom-right'
        | 'bottom-left'
        | 'top-center'
        | 'bottom-center';
    duration: number;
    showIcon: boolean;
    showCloseButton: boolean;
    createdAt: number;
}

interface ToastState {
    toasts: ToastItem[];
}

type ToastAction =
    | { type: 'ADD_TOAST'; payload: Omit<ToastItem, 'id' | 'createdAt'> }
    | { type: 'REMOVE_TOAST'; payload: string }
    | { type: 'CLEAR_ALL_TOASTS' };

const ToastContext = createContext<{
    state: ToastState;
    addToast: (toast: Omit<ToastItem, 'id' | 'createdAt'>) => void;
    removeToast: (id: string) => void;
    clearAllToasts: () => void;
} | null>(null);

const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
    switch (action.type) {
        case 'ADD_TOAST':
            const newToast: ToastItem = {
                ...action.payload,
                id: Math.random().toString(36).substr(2, 9),
                createdAt: Date.now(),
            };
            return {
                ...state,
                toasts: [...state.toasts, newToast],
            };
        case 'REMOVE_TOAST':
            return {
                ...state,
                toasts: state.toasts.filter(toast => toast.id !== action.payload),
            };
        case 'CLEAR_ALL_TOASTS':
            return {
                ...state,
                toasts: [],
            };
        default:
            return state;
    }
};

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducer, { toasts: [] });

    const addToast = (toast: Omit<ToastItem, 'id' | 'createdAt'>) => {
        dispatch({ type: 'ADD_TOAST', payload: toast });
    };

    const removeToast = (id: string) => {
        dispatch({ type: 'REMOVE_TOAST', payload: id });
    };

    const clearAllToasts = () => {
        dispatch({ type: 'CLEAR_ALL_TOASTS' });
    };

    return (
        <ToastContext.Provider value={{ state, addToast, removeToast, clearAllToasts }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
};

const ToastContainer: React.FC = () => {
    const context = useContext(ToastContext);
    if (!context) return null;

    const { state, removeToast } = context;

    return (
        <>
            {state.toasts.map(toast => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    isActive={true}
                    onClose={() => removeToast(toast.id)}
                    duration={toast.duration}
                    variant={toast.variant}
                    position={toast.position}
                    showIcon={toast.showIcon}
                    showCloseButton={toast.showCloseButton}
                />
            ))}
        </>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

// Convenience functions for different toast types
export const useToastHelpers = () => {
    const { addToast } = useToast();

    return {
        success: (
            message: string,
            options?: Partial<Omit<ToastItem, 'id' | 'createdAt' | 'message' | 'variant'>>,
        ) => {
            addToast({
                message,
                variant: 'success',
                position: 'top-right',
                duration: 4000,
                showIcon: true,
                showCloseButton: false,
                ...options,
            });
        },
        error: (
            message: string,
            options?: Partial<Omit<ToastItem, 'id' | 'createdAt' | 'message' | 'variant'>>,
        ) => {
            addToast({
                message,
                variant: 'error',
                position: 'top-right',
                duration: 6000, // Longer duration for errors
                showIcon: true,
                showCloseButton: true, // Show close button for errors
                ...options,
            });
        },
        warning: (
            message: string,
            options?: Partial<Omit<ToastItem, 'id' | 'createdAt' | 'message' | 'variant'>>,
        ) => {
            addToast({
                message,
                variant: 'warning',
                position: 'top-right',
                duration: 5000,
                showIcon: true,
                showCloseButton: false,
                ...options,
            });
        },
        info: (
            message: string,
            options?: Partial<Omit<ToastItem, 'id' | 'createdAt' | 'message' | 'variant'>>,
        ) => {
            addToast({
                message,
                variant: 'info',
                position: 'top-right',
                duration: 4000,
                showIcon: true,
                showCloseButton: false,
                ...options,
            });
        },
    };
};
