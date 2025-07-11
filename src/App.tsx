import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export { App };