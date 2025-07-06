import type { Props as ContainerProps } from './IncidencesPage.container';
import { Styles } from './IncidencesPage.styled';

interface Props extends ContainerProps {}

export const IncidencesPage = (props: Props) => {
    const {} = props;
    return <section className={Styles.container}>IncidencesPage</section>;
};
