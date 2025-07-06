import { IncidencesPage } from './IncidencesPage';

export interface Props {}

export const IncidencesPageContainer = (props: Props) => {
    // const {} = props;

    const childProps = {
        ...props,
    };

    return <IncidencesPage {...childProps} />;
};
