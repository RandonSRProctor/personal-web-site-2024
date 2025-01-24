import { Outlet, useLocation } from 'react-router';
import { MorphicNav } from './MorphicNav';
import { useState } from 'react';

export const NavLayout = () => {
  const location = useLocation();
  const [format, setFormat] = useState<'centered' | 'top'>(
    location.pathname === '/' ? 'centered' : 'top'
  );
  return (
    <div className={`w-screen bg-slate-800 `}>
      <div className={`h-20 bg-slate-800 `}></div>
      <MorphicNav format={format} setFormat={setFormat} />
      <div
        className={`min-h-screen transition-all duration-1000 ${
          format === 'centered' ? 'opacity-0' : 'opacity-100'
        } `}
      >
        <Outlet />
      </div>
    </div>
  );
};
