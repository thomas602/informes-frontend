// Authentication utility functions

export const getAuthToken = (): string | null => {
    return localStorage.getItem('authToken');
};

export const setAuthToken = (token: string): void => {
    localStorage.setItem('authToken', token);
};

export const removeAuthToken = (): void => {
    localStorage.removeItem('authToken');
};

export const isTokenValid = (token: string): boolean => {
    // Here you would typically validate the token structure and expiration
    // For now, we'll just check if it exists and has a basic structure
    return Boolean(token && token.length > 10);
};

// Helper function to create authenticated API requests
export const createAuthHeaders = (): HeadersInit => {
    const token = getAuthToken();
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return headers;
};

// Helper function to handle API responses and token refresh
export const handleApiResponse = async (response: Response): Promise<any> => {
    if (response.status === 401) {
        // Token is invalid or expired
        removeAuthToken();
        window.location.href = '/login';
        throw new Error('Unauthorized');
    }

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};
