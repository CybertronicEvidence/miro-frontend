import React from 'react';
import ErrorBoundary from './errors';
import AppRoutes from './routes';

function App() {
    return (
      <ErrorBoundary>
          <AppRoutes/>
        </ErrorBoundary>
    )
}

export default App
