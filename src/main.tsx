import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router';
import { LoginPage } from './pages/LoginPage/LoginPage.tsx';
import { StudentsPageContainer } from './pages/StudentsPage/StudentsPage.container.tsx';
import { StudentsDetailPage } from './pages/StudentsDetailPage/StudentsDetailPage.tsx';
import { Layout } from './components/Layout';
import { CoursesPageContainer } from './pages/CoursesPage/CoursesPage.container.tsx';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ToastProvider } from './contexts/ToastContext';
import TestPage from './pages/TestPage.tsx';

// Layout wrapper component that uses Outlet
const LayoutWrapper = () => (
    <Layout>
        <Outlet />
    </Layout>
);

// Protected layout wrapper that checks authentication
const ProtectedLayoutWrapper = () => (
    <ProtectedRoute>
        <LayoutWrapper />
    </ProtectedRoute>
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ToastProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/' element={<ProtectedLayoutWrapper />}>
                            <Route index element={<App />} />
                            <Route path='students' element={<StudentsPageContainer />} />
                            <Route path='students/:studentId' element={<StudentsDetailPage />} />
                            <Route path='courses' element={<CoursesPageContainer />} />
                            <Route path='test' element={<TestPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </ToastProvider>
    </StrictMode>,
);
