import { Outlet, useLocation } from 'react-router';
import { AppSelector } from './AppSelector/AppSelector';

export const Apps = () => {
  const location = useLocation();
  const isAppsPath = location.pathname === '/Apps';
  return (
    <>
      <section
        className={`transition-all duration-500 ${
          isAppsPath ? 'opacity-100 h-[calc(100vh-8rem)]' : 'opacity-0'
        }`}
      >
        {isAppsPath ? <AppSelector /> : null}
      </section>
      <section
        className={`transition-all duration-500 ${
          isAppsPath ? 'opacity-0' : 'opacity-100 min-h-[calc(100vh-8rem)]'
        }`}
      >
        <Outlet />
      </section>
    </>
  );
};
