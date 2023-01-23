import React from 'react';
import { AppProvider } from '../app/context';
import ErrorBoundary from './errors';
import AppRoutes from './routes';

function App() {
    return (
      <ErrorBoundary>
        <AppProvider>
          <AppRoutes/>
        </AppProvider>
        </ErrorBoundary>
    )
}

export default App
