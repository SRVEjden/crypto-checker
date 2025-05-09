'use client'
import { useState } from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

export function ReactQueryProvider({ children, state }) {
    const [qc] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={qc}>
            {children}
        </QueryClientProvider>
    );
}
export default ReactQueryProvider;