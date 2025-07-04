import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useToastHelpers } from '../../contexts/ToastContext';
import { Styles } from './LoginPage.styled';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { login, isLoading } = useAuth();
    const { success: showSuccessToast } = useToastHelpers();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Por favor, completa todos los campos');
            return;
        }

        const success = await login(email, password);
        if (success) {
            showSuccessToast('Inicio de sesión exitoso');
            navigate('/');
        } else {
            setError('Credenciales inválidas. Por favor, intenta de nuevo.');
        }
    };

    return (
        <div className={Styles.loginPage}>
            <div className={Styles.loginPageContent}>
                <h1 className={Styles.loginPageTitle}>Bienvenido a informes!</h1>
                <p className={Styles.loginPageDescription}>
                    Por favor, ingresa tus credenciales para iniciar sesión.
                </p>
                <form onSubmit={handleLogin} className={Styles.loginPageForm}>
                    {error && (
                        <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
                            {error}
                        </div>
                    )}
                    <label htmlFor='email' className={Styles.loginPageLabel}>
                        Correo electrónico
                    </label>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Ingresa tu correo electrónico'
                        className={Styles.loginPageInput}
                        disabled={isLoading}
                    />
                    <label htmlFor='password' className={Styles.loginPageLabel}>
                        Contraseña
                    </label>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Ingresa tu contraseña'
                        className={Styles.loginPageInput}
                        disabled={isLoading}
                    />
                    <div className={Styles.loginPageForgotPasswordContainer}>
                        <a
                            className={Styles.loginPageForgotPassword}
                            onClick={() => navigate('/forgot-password')}>
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                    <button type='submit' className={Styles.loginPageButton} disabled={isLoading}>
                        {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                    </button>
                </form>
            </div>
        </div>
    );
};
