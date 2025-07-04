import { useParams } from 'react-router';

export const StudentsDetailPage = () => {
    const { studentId } = useParams();

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>Detalles del estudiante</h1>
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
                <h2 className='text-xl font-semibold mb-4'>ID del estudiante: {studentId}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Nombre
                        </label>
                        <p className='text-gray-900'>John Doe</p>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Correo electrónico
                        </label>
                        <p className='text-gray-900'>john.doe@example.com</p>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Grado
                        </label>
                        <p className='text-gray-900'>10mo grado</p>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Estado
                        </label>
                        <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                            Activo
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
