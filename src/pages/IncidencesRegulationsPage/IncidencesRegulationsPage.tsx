import type { Props as ContainerProps } from './IncidencesRegulationsPage.container';
import { Styles } from './IncidencesRegulationsPage.styled';

interface Props extends ContainerProps {}

export const IncidencesRegulationsPage = (props: Props) => {
    const {} = props;
    return <section className={Styles.container}>IncidencesRegulationsPage</section>;
};
