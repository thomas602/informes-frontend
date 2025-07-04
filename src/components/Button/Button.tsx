import type { Props as ContainerProps } from './Button.container';
import { Styles } from './Button.styled';

interface Props extends ContainerProps {
    children: React.ReactNode;
    variant: 'view' | 'edit' | 'delete';
    onClick: () => void;
}

export const Button = ({ children, variant, onClick }: Props) => {
    return (
        <button className={Styles.button + ' ' + Styles[variant]} onClick={onClick}>
            {children}
        </button>
    );
};
