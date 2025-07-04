# Toast Component

A customizable and reusable Toast notification component built with React, TypeScript, and Tailwind CSS. Now includes a **global toast system** that persists across page changes!

## Features

-   ✅ **Global toast system** - Toasts persist across page navigation
-   ✅ Multiple variants: success, error, warning, info
-   ✅ 6 different positions: top/bottom + left/center/right
-   ✅ Customizable duration (default: 4 seconds)
-   ✅ Optional close button
-   ✅ Optional icons (variant-specific)
-   ✅ Smooth animations with fade and slide effects
-   ✅ Fully accessible with ARIA attributes
-   ✅ TypeScript support with proper types
-   ✅ Tailwind CSS styling with responsive design
-   ✅ Multiple toasts simultaneously
-   ✅ Convenience methods (success(), error(), warning(), info())

## Global Toast System

The global toast system uses React Context to manage toasts across your entire application. Toasts will continue running their timers even when users navigate between pages.

### Setup

Wrap your app with the `ToastProvider`:

```tsx
import { ToastProvider } from './contexts/ToastContext';

function App() {
    return <ToastProvider>{/* Your app components */}</ToastProvider>;
}
```

### Usage

Use the convenience hooks in any component:

```tsx
import { useToastHelpers } from './contexts/ToastContext';

function MyComponent() {
    const { success, error, warning, info } = useToastHelpers();

    const handleSuccess = () => {
        success('Operation completed successfully!');
    };

    const handleError = () => {
        error('Something went wrong!', { duration: 6000 });
    };

    return (
        <div>
            <button onClick={handleSuccess}>Show Success</button>
            <button onClick={handleError}>Show Error</button>
        </div>
    );
}
```

## Basic Usage (Local Component)

For simple use cases within a single component:

```tsx
import { useState } from 'react';
import Toast from './components/Toast';

function MyComponent() {
    const [showToast, setShowToast] = useState(false);

    return (
        <div>
            <button onClick={() => setShowToast(true)}>Show Toast</button>

            <Toast
                message='Hello, this is a toast message!'
                isActive={showToast}
                onClose={() => setShowToast(false)}
            />
        </div>
    );
}
```

## Props

| Prop              | Type                                                                                              | Default       | Description                               |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------- |
| `message`         | `string`                                                                                          | -             | The message to display in the toast       |
| `isActive`        | `boolean`                                                                                         | -             | Controls whether the toast is visible     |
| `onClose`         | `() => void`                                                                                      | -             | Callback function when toast closes       |
| `duration`        | `number`                                                                                          | `4000`        | Duration in milliseconds before auto-hide |
| `variant`         | `'success' \| 'error' \| 'warning' \| 'info'`                                                     | `'info'`      | Visual style variant                      |
| `position`        | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'top-center' \| 'bottom-center'` | `'top-right'` | Position on screen                        |
| `showIcon`        | `boolean`                                                                                         | `true`        | Whether to show the variant icon          |
| `showCloseButton` | `boolean`                                                                                         | `false`       | Whether to show a close button            |
| `className`       | `string`                                                                                          | `''`          | Additional CSS classes                    |

## Global Toast Methods

### useToastHelpers()

Returns convenience methods for showing different types of toasts:

```tsx
const { success, error, warning, info } = useToastHelpers();

// Basic usage
success('Operation successful!');
error('Something went wrong!');
warning('Please review your input');
info('Here is some information');

// With custom options
success('Custom success', {
    position: 'bottom-center',
    duration: 6000,
    showCloseButton: true,
});
```

### useToast()

Returns the full toast context for advanced usage:

```tsx
const { state, addToast, removeToast, clearAllToasts } = useToast();

// Add a custom toast
addToast({
    message: 'Custom toast',
    variant: 'info',
    position: 'top-left',
    duration: 5000,
    showIcon: true,
    showCloseButton: false,
});

// Remove a specific toast
removeToast(toastId);

// Clear all toasts
clearAllToasts();
```

## Examples

### Global Toast System

```tsx
// In any component within ToastProvider
function LoginForm() {
    const { success, error } = useToastHelpers();

    const handleLogin = async () => {
        try {
            await loginUser(credentials);
            success('Login successful! Welcome back.');
        } catch (err) {
            error('Login failed. Please check your credentials.');
        }
    };

    return <form onSubmit={handleLogin}>...</form>;
}
```

### Different Variants

```tsx
// Success toast
<Toast
    message='Success! Your action was completed.'
    isActive={showSuccess}
    onClose={() => setShowSuccess(false)}
    variant='success'
/>

// Error toast
<Toast
    message='Error! Something went wrong.'
    isActive={showError}
    onClose={() => setShowError(false)}
    variant='error'
/>

// Warning toast
<Toast
    message='Warning! Please review your input.'
    isActive={showWarning}
    onClose={() => setShowWarning(false)}
    variant='warning'
/>

// Info toast
<Toast
    message='Info: Here is some helpful information.'
    isActive={showInfo}
    onClose={() => setShowInfo(false)}
    variant='info'
/>
```

### Different Positions

```tsx
// Top left
<Toast
    message='Top left toast'
    isActive={showToast}
    onClose={() => setShowToast(false)}
    position='top-left'
/>

// Bottom center
<Toast
    message='Bottom center toast'
    isActive={showToast}
    onClose={() => setShowToast(false)}
    position='bottom-center'
/>
```

### With Close Button

```tsx
<Toast
    message='Toast with close button'
    isActive={showToast}
    onClose={() => setShowToast(false)}
    showCloseButton={true}
    duration={10000} // 10 seconds
/>
```

### Without Icon

```tsx
<Toast
    message='Toast without icon'
    isActive={showToast}
    onClose={() => setShowToast(false)}
    showIcon={false}
/>
```

### Custom Duration

```tsx
<Toast
    message='Quick toast (2 seconds)'
    isActive={showToast}
    onClose={() => setShowToast(false)}
    duration={2000}
/>
```

## Navigation Persistence

The global toast system is designed to persist across page changes. Here's how to test it:

1. Start a long-duration toast (e.g., 15 seconds)
2. Navigate to a different page in your app
3. The toast should continue running and remain visible
4. The toast will auto-remove when its duration expires

```tsx
// Example: Start a toast and navigate
const { success } = useToastHelpers();

const startPersistentToast = () => {
    success('This toast will persist for 15 seconds!', { duration: 15000 });
    // Navigate to another page - toast will continue running
    navigate('/another-page');
};
```

## Styling

The component uses Tailwind CSS classes and can be customized by:

1. **Adding custom classes** via the `className` prop
2. **Modifying the component's internal styles** in the `getVariantStyles()` and `getPositionStyles()` functions
3. **Using Tailwind's configuration** to customize colors, spacing, etc.

## Accessibility

The component includes proper ARIA attributes:

-   `aria-live="polite"` - Announces toast messages to screen readers
-   `aria-atomic="true"` - Ensures the entire toast content is announced
-   `aria-label="Close toast"` - For the close button

## TypeScript

The component is fully typed with TypeScript:

```tsx
import Toast, { ToastProps, ToastVariant } from './components/Toast';
import { useToastHelpers, useToast } from './contexts/ToastContext';

// You can use the types for your own implementations
const toastProps: ToastProps = {
    message: 'Hello',
    isActive: true,
    variant: 'success',
};
```

## Migration from Local to Global

If you're migrating from the local toast system to the global one:

**Before (Local):**

```tsx
const [showToast, setShowToast] = useState(false);

<Toast message='Hello' isActive={showToast} onClose={() => setShowToast(false)} />;
```

**After (Global):**

```tsx
const { success } = useToastHelpers();

// Just call the function - no state management needed!
success('Hello');
```
