import { memo } from 'react';
import { Button } from './Button';

export interface Props {
    children: React.ReactNode;
    variant: 'view' | 'edit' | 'delete';
    onClick: () => void;
}

export const ButtonContainer = (props: Props) => {
    const { children, variant, onClick } = props;

    const childProps = {
        ...props,
        children,
        variant,
        onClick,
    };

    return <Button {...childProps} />;
};

export const MemoizedButtonContainer = memo(ButtonContainer);
