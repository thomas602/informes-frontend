import type { Props as ContainerProps } from './CoursesPage.container';
import { Styles } from './CoursesPage.styled';

interface Props extends ContainerProps {}

export const CoursesPage = (props: Props) => {
    const {} = props;
    return (
        <section className={Styles.container}>
            <h1>Cursos</h1>
            <p>Acá podés ver la lista de cursos y sus datos.</p>
        </section>
    );
};
