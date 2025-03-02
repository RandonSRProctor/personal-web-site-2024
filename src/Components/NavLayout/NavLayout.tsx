import { Outlet, useLocation } from 'react-router';
import { MorphicNav } from './MorphicNav';

/**
 * Invisible full-screen layer that wraps MorphicNav and manipulates its position
 */

export const NavLayout = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/';
  return (
    <div
      className={`FIRST DIV FULLSCREEN w-screen bg-gradient-to-r from-slate-800 to-slate-800`}
    >
      {/* Invisible header placeholder */}
      <div className={`h-20 bg-slate-800 `}></div>
      <MorphicNav />
      <section
        className={` min-h-[calc(100vh-80px)] transition-all duration-1000 ${
          isRootPath ? 'opacity-0' : 'opacity-100'
        } `}
      >
        <Outlet />
      </section>
    </div>
  );
};
