import { Outlet, useLocation } from 'react-router';
import { Header } from '../Header';
import { LandingMenu } from '../LandingMenu';

export const Root = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/';
  return (
    <div className="bg-slate-800 justify-center">
      <div className="min-h-screen max-w-[1200px] bg-slate-800 p-4">
        <Header />
        <section
          className={`transition-all duration-500 ${
            isRootPath ? 'opacity-100 h-[calc(100vh-8rem)]' : 'opacity-0'
          }`}
        >
          {isRootPath ? <LandingMenu /> : null}
        </section>
        <section
          className={`transition-all duration-500 ${
            isRootPath ? 'opacity-0' : 'opacity-100 min-h-[calc(100vh-8rem)]'
          }`}
        >
          <Outlet />
        </section>
      </div>
    </div>
  );
};
