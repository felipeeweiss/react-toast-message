# React Toast Message

A simple toast notification component for React applications.

## Installation

```bash
npm install @felipeeweiss/react-toast-message
```

## Usage

### 1. Wrap your app with ToastProvider

```tsx
import { ToastProvider } from '@felipeeweiss/react-toast-message';

function App() {
  return <ToastProvider>{/* Your app components */}</ToastProvider>;
}
```

**Note:** The CSS styles are automatically included when you import the component, so no need for a separate CSS import!

### 2. Use the toast hook in your components

```tsx
import { useToast } from '@felipeeweiss/react-toast-message';

function MyComponent() {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast('This is a success message!', 'success');
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

## Props

| Property  | Type    | Default | Description                                         |
| --------- | ------- | ------- | --------------------------------------------------- |
| animation | boolean | true    | Enables or disables enter/exit animations globally. |

## Toast Types

The component supports four toast types:

- `success`
- `error`
- `info`
- `warning`

## Example

```tsx
import { ToastProvider, useToast } from '@felipeeweiss/react-toast-message';

function App() {
  return (
    // Disable animations for the entire app
    <ToastProvider animation={false}>
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

- ⏱️ Auto-dismiss after 3 seconds
- ✨ Optional animations (Enter/Exit)
- 🎯 Simple API
- 📦 Lightweight
- 🔧 TypeScript support

## License

MIT
