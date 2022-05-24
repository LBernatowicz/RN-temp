// noinspection BadExpressionStatementJS

import React, { ReactNode } from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

type PropsType = {
    children: ReactNode;
}

const ReactQueryClientProvider = ({ children }: PropsType) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryClientProvider;
