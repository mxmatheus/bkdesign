# Custom React Hooks

This directory contains custom React hooks for the portfolio application.

## Hooks

### useMediaQuery
Track media query matches for responsive behavior.

**Usage:**
```jsx
import { useMediaQuery, useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

function MyComponent() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isCustomBreakpoint = useMediaQuery('(min-width: 1200px)');
  
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

**Predefined Breakpoint Hooks:**
- `useIsMobile()` - Matches `(max-width: 768px)`
- `useIsTablet()` - Matches `(min-width: 769px) and (max-width: 1024px)`
- `useIsDesktop()` - Matches `(min-width: 1025px)`
- `usePrefersReducedMotion()` - Matches `(prefers-reduced-motion: reduce)`

**Features:**
- SSR-safe (returns false during server-side rendering)
- Prevents hydration mismatches
- Supports both modern and legacy browser APIs
- Automatic cleanup on unmount

### useScrollProgress
Track scroll progress as a value between 0 and 1.

**Usage:**
```jsx
import { useScrollProgress } from '@/hooks/useScrollProgress';

function ScrollIndicator() {
  const progress = useScrollProgress();
  
  return (
    <div 
      className="progress-bar" 
      style={{ width: `${progress * 100}%` }}
    />
  );
}
```

**Features:**
- Returns value between 0 (top) and 1 (bottom)
- Optimized with passive event listeners
- Handles edge cases (no scrollable content, negative scroll)
- Automatic cleanup on unmount

## Testing

Tests for these hooks are located in `hooks/__tests__/`:
- `useMediaQuery.test.js` - Tests for media query hook
- `useScrollProgress.test.js` - Tests for scroll progress hook

**Note:** Tests are written using Jest and React Testing Library. To run tests, ensure the testing infrastructure is set up with the following dependencies:
- `@testing-library/react`
- `@testing-library/react-hooks` or `@testing-library/react` v13+ (includes renderHook)
- `jest`
- `jest-environment-jsdom`

## Requirements Satisfied

- ✅ **9.2** - Custom hooks implemented: useScrollProgress and useMediaQuery
- ✅ **9.3** - Tests written for custom hooks
