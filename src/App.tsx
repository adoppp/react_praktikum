import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Suspense } from 'react';
import { Loader } from '@/components/Loader';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export { App };