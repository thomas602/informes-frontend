import { useTheme } from '../contexts/ThemeContext';

export const useThemeToggle = () => {
    const { theme, setTheme, isDark, toggleTheme } = useTheme();

    const switchToLight = () => setTheme('light');
    const switchToDark = () => setTheme('dark');
    const switchToSystem = () => setTheme('system');

    return {
        theme,
        isDark,
        toggleTheme,
        switchToLight,
        switchToDark,
        switchToSystem,
    };
};
