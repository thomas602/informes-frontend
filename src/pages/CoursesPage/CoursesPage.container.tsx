import { CoursesPage } from './CoursesPage';

export interface Props {}

export const CoursesPageContainer = (props: Props) => {
    // const {} = props;

    const childProps = {
        ...props,
    };

    return <CoursesPage {...childProps} />;
};
