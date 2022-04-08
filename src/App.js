import './App.css';
import React from 'react';

import { Dashboard } from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { PostDetail } from './components/PostDetail';
import { Config } from './components/Config';
import { ProtectedStateRoute } from './components/ProtectedStateRoute';
import { Back } from './components/Back';
import { Provider } from './store/Feed';

function App() {
  return (
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
  );
}

export default App;
