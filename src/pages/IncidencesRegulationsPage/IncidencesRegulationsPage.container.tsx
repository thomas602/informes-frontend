import { IncidencesRegulationsPage } from './IncidencesRegulationsPage';

export interface Props {}

export const IncidencesRegulationsPageContainer = (props: Props) => {
    // const {} = props;

    const childProps = {
        ...props,
    };

    return <IncidencesRegulationsPage {...childProps} />;
};
