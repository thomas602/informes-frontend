import type { Props as ContainerProps } from './TemplateName.container';
import { Styles } from './TemplateName.styled';

interface Props extends ContainerProps {}

export const TemplateName = (props: Props) => {
    const {} = props;
    return (
        <>
            <h1 className={Styles.styleName}>TemplateName</h1>
        </>
    );
};
