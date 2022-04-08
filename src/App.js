import './App.css';
import React from 'react';

import { Dashboard } from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { PostDetail } from './components/PostDetail';
import { Config } from './components/Config';
import { ProtectedStateRoute } from './components/ProtectedStateRoute';
import { Back } from './components/Back';
import { Provider } from './store/Feed';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client and use custom config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30, // 30seconds
      cacheTime: 1000 * 30, //30 seconds
      retry: 2,
      refetchOnMount: 'always',
      refetchOnWindowFocus: 'always',
      refetchOnReconnect: 'always',
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Back></Back>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route element={<ProtectedStateRoute />}>
            <Route path='/detail' element={<PostDetail />} />
          </Route>
          <Route path='/config' element={<Config />} />
        </Routes>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
