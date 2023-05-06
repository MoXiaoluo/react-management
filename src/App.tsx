import { Suspense } from 'react';

import { useRoutes } from 'react-router-dom';
import router from './router';

function App() {
  const route = useRoutes(router);
  return (
    <>
      <Suspense fallback='loading'>{route}</Suspense>
    </>
  );
}

export default App;
