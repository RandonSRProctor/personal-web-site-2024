import { Outlet } from 'react-router';
import { Header } from '../Header';

export const Root = () => {
  return (
    <div className="min-h-screen bg-slate-800">
      <Header />
      <Outlet />
    </div>
  );
};
