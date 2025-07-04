import React from 'react';
import { useToastHelpers } from '../contexts/ToastContext';

const TestPage: React.FC = () => {
    const { success, error, warning, info } = useToastHelpers();

    return (
        <div className='min-h-screen bg-gray-50 p-8'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-3xl font-bold text-gray-900 mb-8'>Test Page</h1>

                <div className='bg-green-50 border border-green-200 rounded-lg p-6 mb-8'>
                    <h2 className='text-xl font-semibold text-green-800 mb-4'>
                        ✅ Navigation Test Successful!
                    </h2>
                    <p className='text-green-700 mb-4'>
                        If you can see this page and there's still a toast visible from the previous
                        page, then the global toast system is working correctly!
                    </p>
                    <p className='text-green-700'>
                        The toast should continue running its timer even though you navigated to
                        this page.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Test More Toasts</h2>
                        <div className='space-y-3'>
                            <button
                                onClick={() => success('Success toast from test page!')}
                                className='w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors'>
                                Show Success Toast
                            </button>
                            <button
                                onClick={() => error('Error toast from test page!')}
                                className='w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors'>
                                Show Error Toast
                            </button>
                            <button
                                onClick={() => warning('Warning toast from test page!')}
                                className='w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors'>
                                Show Warning Toast
                            </button>
                            <button
                                onClick={() => info('Info toast from test page!')}
                                className='w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors'>
                                Show Info Toast
                            </button>
                        </div>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Navigation</h2>
                        <div className='space-y-3'>
                            <button
                                onClick={() => window.history.back()}
                                className='w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors'>
                                ← Go Back to Main Page
                            </button>
                            <button
                                onClick={() => window.location.reload()}
                                className='w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors'>
                                🔄 Reload Page (Toasts will persist!)
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6'>
                    <h3 className='text-lg font-semibold text-blue-800 mb-2'>How It Works</h3>
                    <ul className='list-disc list-inside space-y-2 text-blue-700'>
                        <li>
                            The <code>ToastProvider</code> wraps the entire app and manages global
                            toast state
                        </li>
                        <li>Toasts are stored in React Context, not component state</li>
                        <li>When you navigate, the context persists and toasts continue running</li>
                        <li>
                            Each toast has its own timer and will auto-remove when duration expires
                        </li>
                        <li>You can have multiple toasts active simultaneously</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TestPage;
