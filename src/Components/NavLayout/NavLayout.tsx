import { Outlet, useLocation } from 'react-router';
import { MorphicNav } from './MorphicNav';
import { NameLogo } from './NameLogo';
import { Div } from '../utility/Div';
import { NavLinks } from './NavLinks';
import { Breadcrumb } from './Breadcrumb';

/**
 * @deprecated Relic from a previous attempt to craete a "morphic" nav experience that did not pan out.
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
      <MorphicNav>
        <NameLogo />
        <Div top="w-2" centered="w-4" />
        {isRootPath ? <NavLinks /> : <Breadcrumb />}
      </MorphicNav>
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
