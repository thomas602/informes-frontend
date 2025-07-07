import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { TableContainer, type Column } from '../../components/Table';
import { ButtonContainer } from '../../components/Button/Button.container';
import type { Student } from './StudentsPage.container';
import { Styles } from './StudentsPage.styled';

export interface Props {
    students: Student[];
    columns: Column<Student>[];
}

export const StudentsPage = ({ students, columns }: Props) => {
    const navigate = useNavigate();
    const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10); // Show 10 students per page

    // Sync filteredStudents when students prop changes
    useEffect(() => {
        setFilteredStudents(students);
        setCurrentPage(1); // Reset to first page when data changes
    }, [students]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredStudents.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPageData = filteredStudents.slice(startIndex, endIndex);

    const handleViewStudent = (_student: Student) => {
        navigate('/students/1');
    };

    const handleDeleteStudent = (_student: Student) => {
        // Handle delete logic
        console.log('Delete student:', _student);
    };

    const handleRefresh = async () => {
        console.log('Local storage theme:', localStorage.theme);

        localStorage.theme = 'light';
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        console.log('Refreshing students data...');
    };

    const handleAddStudent = () => {
        console.log('Adding new student...');
        // Navigate to add student form or open modal
    };

    const handleSearch = (searchTerm: string) => {
        if (!searchTerm.trim()) {
            setFilteredStudents(students);
            setCurrentPage(1); // Reset to first page
            return;
        }

        const filtered = students.filter(
            student =>
                student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.school.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setFilteredStudents(filtered);
        setCurrentPage(1); // Reset to first page when searching
        console.log('Searching for:', searchTerm);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const renderActions = (student: Student) => (
        <>
            <ButtonContainer variant='view' onClick={() => handleViewStudent(student)}>
                <i className='fa-solid fa-eye'></i>
            </ButtonContainer>
            <ButtonContainer variant='delete' onClick={() => handleDeleteStudent(student)}>
                <i className='fa-solid fa-trash'></i>
            </ButtonContainer>
        </>
    );

    return (
        <div>
            <div className={Styles.pageHeader}>
                <h1 className={Styles.pageTitle}>Alumnos</h1>
                <p className={Styles.pageDescription}>
                    Acá podés ver la lista de alumnos y sus datos.
                </p>
            </div>

            <TableContainer
                data={currentPageData}
                columns={columns}
                actions={renderActions}
                title='Lista de Estudiantes'
                onRefresh={handleRefresh}
                onAdd={handleAddStudent}
                onSearch={handleSearch}
                searchPlaceholder='Buscar por nombre, email o escuela...'
                loading={loading}
                emptyMessage='No se encontraron estudiantes'
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                showPagination={totalPages > 1}
            />
        </div>
    );
};
