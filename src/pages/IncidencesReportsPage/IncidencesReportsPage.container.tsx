import { IncidencesReportsPage } from './IncidencesReportsPage';

export interface Props {}

export const IncidencesReportsPageContainer = (props: Props) => {
    // const {} = props;

    const childProps = {
        ...props,
    };

    return <IncidencesReportsPage {...childProps} />;
};
