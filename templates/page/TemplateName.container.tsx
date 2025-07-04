import { TemplateName } from './TemplateName';

export interface Props {}

export const TemplateNameContainer = (props: Props) => {
    // const {} = props;

    const childProps = {
        ...props,
    };

    return <TemplateName {...childProps} />;
};
