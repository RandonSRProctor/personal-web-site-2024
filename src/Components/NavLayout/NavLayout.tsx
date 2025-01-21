import { Outlet, useLocation } from 'react-router';
import { MorphicNav } from './MorphicNav';
import { useState } from 'react';

export const NavLayout = () => {
  const location = useLocation();
  const [format, setFormat] = useState<'centered' | 'top'>(
    location.pathname === '/' ? 'centered' : 'top'
  );
  return (
    <div
      className={`transition-all delay-500 duration-500 w-screen h-screen bg-slate-800 ' ${
        format === 'centered' ? ' bg-opacity-100' : ' bg-opacity-0'
      }`}
    >
      <div className="h-20"></div>
      <MorphicNav format={format} setFormat={setFormat} />
      <Outlet />
    </div>
  );
};
