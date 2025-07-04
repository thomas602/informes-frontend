# Authentication System

This document explains how the authentication system works in the informes-frontend application.

## Overview

The authentication system provides:

-   User login/logout functionality
-   Protected routes that redirect unauthenticated users to login
-   Persistent authentication state using localStorage
-   Automatic token validation and cleanup

## Components

### AuthContext (`src/contexts/AuthContext.tsx`)

The main authentication context that provides:

-   `user`: Current user object (null if not authenticated)
-   `isAuthenticated`: Boolean indicating if user is logged in
-   `isLoading`: Boolean indicating if authentication check is in progress
-   `login(email, password)`: Function to authenticate user
-   `logout()`: Function to log out user
-   `checkAuthStatus()`: Function to check current authentication status

### ProtectedRoute (`src/components/ProtectedRoute/ProtectedRoute.tsx`)

A wrapper component that:

-   Checks if user is authenticated
-   Shows loading spinner while checking authentication
-   Redirects to `/login` if user is not authenticated
-   Renders children only if user is authenticated

### Auth Utilities (`src/utils/auth.ts`)

Helper functions for:

-   Token management (get, set, remove)
-   Token validation
-   Creating authenticated API request headers
-   Handling API responses with automatic logout on 401 errors

## Usage

### Protecting Routes

All routes that require authentication are wrapped with `ProtectedRoute`:

```tsx
<Route path='/' element={<ProtectedLayoutWrapper />}>
    <Route index element={<App />} />
    <Route path='students' element={<StudentsPage />} />
    <Route path='courses' element={<CoursesPageContainer />} />
</Route>
```

### Using Authentication in Components

```tsx
import { useAuth } from '../contexts/AuthContext';

const MyComponent = () => {
    const { user, isAuthenticated, logout } = useAuth();

    if (!isAuthenticated) {
        return <div>Please log in</div>;
    }

    return (
        <div>
            <h1>Welcome, {user?.name}!</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};
```

### Making Authenticated API Calls

```tsx
import { createAuthHeaders, handleApiResponse } from '../utils/auth';

const fetchData = async () => {
    try {
        const response = await fetch('/api/data', {
            headers: createAuthHeaders(),
        });

        const data = await handleApiResponse(response);
        return data;
    } catch (error) {
        console.error('API call failed:', error);
    }
};
```

## Configuration

### Backend Integration

To integrate with your backend:

1. Update the `login` function in `AuthContext.tsx` to make actual API calls:

```tsx
const login = async (email: string, password: string): Promise<boolean> => {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            return true;
        }

        return false;
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
};
```

2. Update the `checkAuthStatus` function to validate tokens with your backend:

```tsx
const checkAuthStatus = async () => {
    try {
        const token = localStorage.getItem('authToken');

        if (token) {
            const response = await fetch('/api/auth/validate', {
                headers: createAuthHeaders(),
            });

            if (response.ok) {
                const user = await response.json();
                setUser(user);
            } else {
                logout();
            }
        }
    } catch (error) {
        console.error('Error checking auth status:', error);
        logout();
    } finally {
        setIsLoading(false);
    }
};
```

### Environment Variables

Create a `.env` file for API configuration:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_AUTH_ENDPOINT=/auth
```

## Security Considerations

1. **Token Storage**: Currently using localStorage. Consider using httpOnly cookies for better security.
2. **Token Expiration**: Implement token refresh logic for long-lived sessions.
3. **HTTPS**: Always use HTTPS in production to protect tokens in transit.
4. **CSRF Protection**: Implement CSRF tokens for state-changing operations.

## Testing

The current implementation includes mock authentication for development. To test:

1. Enter any email and password on the login page
2. The system will simulate a successful login
3. You'll be redirected to the main application
4. Use the logout button in the sidebar to log out

## Troubleshooting

### Common Issues

1. **Infinite redirect loop**: Check that the login route is not protected
2. **Token not persisting**: Verify localStorage is available and not blocked
3. **API calls failing**: Ensure the backend is running and endpoints are correct

### Debug Mode

Add debug logging to the AuthContext:

```tsx
const login = async (email: string, password: string): Promise<boolean> => {
    console.log('Attempting login with:', email);
    // ... rest of login logic
};
```
