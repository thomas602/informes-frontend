import { AttendancePage } from './AttendancePage';

export interface Props {}

export const AttendancePageContainer = (props: Props) => {
    // const {} = props;

    const childProps = {
        ...props,
    };

    return <AttendancePage {...childProps} />;
};
