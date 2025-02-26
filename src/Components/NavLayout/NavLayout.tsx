import { Outlet, useLocation } from 'react-router';
import { MorphicNav } from './MorphicNav';
import { useEffect, useState } from 'react';
import { DispatchNavContext, NavContext } from '../../hooks/useNavContext';
import { NavFormat } from '../../types';

/**
 * Invisible full-screen layer that wraps MorphicNav and manipulates its position
 */

export const NavLayout = () => {
  const location = useLocation();
  const [format, setFormat] = useState<NavFormat>('centered');

  useEffect(() => {
    if (location.pathname === '/' && format !== 'centered') {
      setFormat('centered');
    }
    if (location.pathname !== '/' && format !== 'top') {
      setFormat('top');
    }
  }, [format, location.pathname]);

  return (
    <NavContext.Provider value={format}>
      <DispatchNavContext.Provider value={setFormat}>
        <div className={`FIRST DIV FULLSCREEN w-screen bg-slate-800 `}>
          {/* Invisible header placeholder */}
          <div className={`h-20 bg-slate-800 `}></div>
          <MorphicNav />
          {/* NOTE: body in a div is a no-no.  This will need re-aranging.  Do we need the fullscreen div? */}
          <body
            className={` min-h-[calc(100vh-80px)] transition-all duration-1000 ${
              format === 'centered' ? 'opacity-0' : 'opacity-100'
            } `}
          >
            <Outlet />
          </body>
        </div>
      </DispatchNavContext.Provider>
    </NavContext.Provider>
  );
};
