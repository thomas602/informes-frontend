import { useEffect, useState } from 'react';
import { StudentsPage } from './StudentsPage';
import type { Column } from '../../components/Table';

export interface Student {
    fullName: string;
    email: string;
    phone: string;
    school: string;
    grade: string;
    diagnostic: string;
}

const studentsMock: Student[] = [
    {
        fullName: 'Juan Perez',
        email: 'juan.perez@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Gomez',
        email: 'juan.gomez@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Gomez',
        email: 'juan.gomez2@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Gomez',
        email: 'juan.gomez3@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Perez',
        email: 'juan.perez@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Gomez',
        email: 'juan.gomez@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Gomez',
        email: 'juan.gomez2@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Gomez',
        email: 'juan.gomez3@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Perez',
        email: 'juan.perez@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Gomez',
        email: 'juan.gomez@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Gomez',
        email: 'juan.gomez2@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
    {
        fullName: 'Juan Gomez',
        email: 'juan.gomez3@gmail.com',
        phone: '1234567890',
        school: 'Escuela Falsa 123',
        grade: '1ro A',
        diagnostic: 'Buenos Aires',
    },
];

const columns: Column<Student>[] = [
    { key: 'fullName', header: 'Nombre' },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Teléfono' },
    { key: 'school', header: 'Escuela' },
    { key: 'grade', header: 'Grado' },
    { key: 'diagnostic', header: 'Diagnóstico' },
];

export interface Props {}

export const StudentsPageContainer = (props: Props) => {
    const {} = props;

    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        setStudents(studentsMock);
    }, []);

    const childProps = {
        ...props,
        students,
        columns,
    };
    return <StudentsPage {...childProps} />;
};
