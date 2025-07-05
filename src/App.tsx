import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>
        Header
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export { App };