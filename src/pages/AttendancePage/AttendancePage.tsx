import { useState } from 'react';
import type { Props as ContainerProps } from './AttendancePage.container';
import { Styles } from './AttendancePage.styled';

interface Props extends ContainerProps {}

const students = [
    {
        id: 1,
        name: 'Juan Perez',
        attendance: 'present',
    },
    {
        id: 2,
        name: 'Maria Gomez',
        attendance: 'late',
    },
    {
        id: 3,
        name: 'Pedro Gomez',
        attendance: 'absent',
    },
    {
        id: 4,
        name: 'Ana Gomez',
        attendance: 'present',
    },
];

const attendanceStatus = [
    {
        color: 'bg-green-300 text-green-800 dark:bg-green-800 dark:text-green-300',
        label: 'Presente',
        code: 'present',
    },
    {
        color: 'bg-yellow-300 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-300',
        label: 'Tarde',
        code: 'late',
    },
    {
        color: 'bg-red-300 text-red-800 dark:bg-red-800 dark:text-red-300',
        label: 'Ausente',
        code: 'absent',
    },
];

export const AttendancePage = (props: Props) => {
    const [studentsAttendance, setStudentsAttendance] = useState(students);
    const {} = props;
    const handleAttendance = (id: number, attendance: string) => {
        setStudentsAttendance(prev =>
            prev.map(student => (student.id === id ? { ...student, attendance } : student)),
        );
    };
    const handleAttendanceAll = (attendance: string) => {
        setStudentsAttendance(prev => prev.map(student => ({ ...student, attendance })));
    };
    return (
        <section>
            <div className={Styles.pageHeader}>
                <div className={Styles.pageTitle}>
                    <h1>Presentismo</h1>
                    <p className={Styles.description}>
                        Acá podés gestionar el presentismo de los alumnos.
                    </p>
                </div>
                <button className={Styles.button} onClick={() => handleAttendanceAll('present')}>
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
            <div className={Styles.dashboard}>
                <div className={Styles.dashboardItem}>
                    <div className={Styles.dashboardItemTitle}>
                        <i className='fa fa-users text-blue-500' aria-hidden='true'></i>
                        <div className={Styles.dashboardItemTitleContent}>
                            <span className={Styles.dashboardItemTitleContentTitle}>Total</span>
                            <span
                                className={
                                    Styles.dashboardItemTitleContentValue +
                                    ' text-gray-900 dark:text-gray-400'
                                }>
                                8
                            </span>
                        </div>
                    </div>
                </div>
                <div className={Styles.dashboardItem}>
                    <div className={Styles.dashboardItemTitle}>
                        <i
                            className='fa-regular fa-circle-check text-green-500'
                            aria-hidden='true'></i>
                        <div className={Styles.dashboardItemTitleContent}>
                            <span className={Styles.dashboardItemTitleContentTitle}>Presentes</span>
                            <span
                                className={
                                    Styles.dashboardItemTitleContentValue + ' text-green-500'
                                }>
                                0
                            </span>
                        </div>
                    </div>
                </div>
                <div className={Styles.dashboardItem}>
                    <div className={Styles.dashboardItemTitle}>
                        <i className='fa-regular fa-clock text-yellow-500' aria-hidden='true'></i>
                        <div className={Styles.dashboardItemTitleContent}>
                            <span className={Styles.dashboardItemTitleContentTitle}>Tarde</span>
                            <span
                                className={
                                    Styles.dashboardItemTitleContentValue + ' text-yellow-500'
                                }>
                                0
                            </span>
                        </div>
                    </div>
                </div>
                <div className={Styles.dashboardItem}>
                    <div className={Styles.dashboardItemTitle}>
                        <i className='fa-solid fa-user-slash text-red-500' aria-hidden='true'></i>
                        <div className={Styles.dashboardItemTitleContent}>
                            <span className={Styles.dashboardItemTitleContentTitle}>Ausentes</span>
                            <span
                                className={Styles.dashboardItemTitleContentValue + ' text-red-500'}>
                                0
                            </span>
                        </div>
                    </div>
                </div>
                <div className={Styles.dashboardItem}>
                    <div className={Styles.dashboardItemTitle}>
                        <i className='fa fa-users text-gray-500' aria-hidden='true'></i>
                        <div className={Styles.dashboardItemTitleContent}>
                            <span className={Styles.dashboardItemTitleContentTitle}>
                                Sin Marcar
                            </span>
                            <span
                                className={
                                    Styles.dashboardItemTitleContentValue + ' text-gray-500'
                                }>
                                8
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.studentsAttendance}>
                <div className={Styles.studentsAttendanceHeader}>
                    <h2 className={Styles.studentsAttendanceHeaderTitle}>
                        Asistencia de Alumnos - 1A
                    </h2>
                    <p className={Styles.studentsAttendanceHeaderDescription}>
                        Registrá la asistencia de 8 alumnos el 6/7/2025
                    </p>
                </div>
                <div className={Styles.studentsAttendanceList}>
                    {studentsAttendance.map((student, index) => (
                        <div className={Styles.studentsAttendanceListItem} key={index}>
                            <p className={Styles.studentsAttendanceListItemName}>{student.name}</p>
                            <div className={Styles.studentsAttendanceListItemActions}>
                                {attendanceStatus.map(status => (
                                    <button
                                        onClick={() => handleAttendance(student.id, status.code)}
                                        key={status.label}
                                        className={
                                            Styles.studentsAttendanceListItemAction +
                                            ' ' +
                                            (student.attendance === status.code
                                                ? status.color
                                                : 'text-gray-800 dark:bg-gray-700 dark:text-gray-400')
                                        }>
                                        {status.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={Styles.studentsAttendanceFooter}>
                <button className={Styles.studentsAttendanceFooterCancelButton}>Cancelar</button>
                <button className={Styles.studentsAttendanceFooterSaveButton}>
                    Guardar Asistencias
                </button>
            </div>
        </section>
    );
};
