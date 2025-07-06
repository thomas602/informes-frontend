import type { Props as ContainerProps } from './AttendancePage.container';
import { Styles } from './AttendancePage.styled';

interface Props extends ContainerProps {}

export const AttendancePage = (props: Props) => {
    const {} = props;
    return (
        <section>
            <div className={Styles.pageHeader}>
                <div className={Styles.pageTitle}>
                    <h1>Presentismo</h1>
                    <p className={Styles.description}>
                        Acá podés gestionar el presentismo de los alumnos.
                    </p>
                </div>
                <button className={Styles.button}>
                    <i className='fa fa-check-square' aria-hidden='true'></i>
                    <span>Marcar todos presentes</span>
                </button>
            </div>
            <div className={Styles.filtersContainer}>
                <div className={Styles.filtersTitle}>
                    <i className='fa-regular fa-calendar' aria-hidden='true'></i>
                    <span>Filtros de Asistencia</span>
                </div>
                <div className={Styles.filtersContent}>
                    <div className={Styles.filtersContentItem}>
                        <label htmlFor='date' className={Styles.filtersContentItemLabel}>
                            Fecha
                        </label>
                        <input
                            className={Styles.filtersContentItemInput}
                            type='date'
                            id='date'
                            defaultValue={new Date().toISOString().split('T')[0]}
                        />
                    </div>
                    <div className={Styles.filtersContentItem}>
                        <label htmlFor='course' className={Styles.filtersContentItemLabel}>
                            Curso
                        </label>
                        <select className={Styles.filtersContentItemInput} id='course'>
                            <option value='1'>1A</option>
                            <option value='2'>2A</option>
                            <option value='3'>3A</option>
                            <option value='4'>4A</option>
                            <option value='5'>5A</option>
                            <option value='6'>6A</option>
                            <option value='7'>7A</option>
                            <option value='8'>8A</option>
                        </select>
                    </div>
                    <div className={Styles.filtersContentItem}>
                        <label htmlFor='name' className={Styles.filtersContentItemLabel}>
                            Nombre
                        </label>
                        <input
                            className={Styles.filtersContentItemInput}
                            type='text'
                            id='name'
                            placeholder='Buscar por nombre...'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
