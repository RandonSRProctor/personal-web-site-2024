import { Outlet } from 'react-router';
import { MorphicNav } from '../Landing/Landing';

export const MasterLayout = () => {
  return (
    <div className="w-screen h-screen">
      <MorphicNav />
      <Outlet />
    </div>
  );
};
