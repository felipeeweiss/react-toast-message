# React Toast Message

A simple and customizable toast notification component for React applications.

## Installation

```bash
npm install react-toast-message
```

## Usage

### 1. Wrap your app with ToastProvider

```tsx
import { ToastProvider } from 'react-toast-message';

function App() {
  return <ToastProvider>{/* Your app components */}</ToastProvider>;
}
```

**Note:** The CSS styles are automatically included when you import the component, so no need for a separate CSS import!

### 2. Use the toast hook in your components

```tsx
import { useToast } from 'react-toast-message';

function MyComponent() {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast('This is a success message!', 'success');
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

## Toast Types

The component supports four toast types:

- `success`
- `error`
- `info`
- `warning`

## Example

```tsx
import { ToastProvider, useToast } from 'react-toast-message';

function App() {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  );
}

function MyComponent() {
  const { addToast } = useToast();

  return (
    <div>
      <button onClick={() => addToast('Success!', 'success')}>
        Success Toast
      </button>
      <button onClick={() => addToast('Error!', 'error')}>Error Toast</button>
      <button onClick={() => addToast('Info!', 'info')}>Info Toast</button>
      <button onClick={() => addToast('Warning!', 'warning')}>
        Warning Toast
      </button>
    </div>
  );
}
```

## Features

- 🎨 Customizable toast types
- ⏱️ Auto-dismiss after 3 seconds
- 🎯 Simple API
- 📦 Lightweight
- 🔧 TypeScript support

## License

MIT
