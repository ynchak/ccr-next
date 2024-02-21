import { Route, Routes, useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import { Layout } from './components/layout';
import { Home } from './pages/home-page';
import { Etc } from './pages/etc-page';
import { Checking } from './pages/checking-page';
import { NotFound } from './pages/notfound-page';

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/checking" element={<Checking />} />
          <Route path="/etc" element={<Etc />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </NextUIProvider>
  );
}

export default App;
