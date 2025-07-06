import { memo, useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

export interface Props {}

export const ThemeSwitcherContainer = (props: Props) => {
    // const {} = props;
    const [theme, setTheme] = useState(localStorage.theme);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        localStorage.theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(localStorage.theme);
    };

    const childProps = {
        ...props,
        theme,
        toggleTheme,
    };

    return <ThemeSwitcher {...childProps} />;
};

export const MemoizedThemeSwitcherContainer = memo(ThemeSwitcherContainer);
