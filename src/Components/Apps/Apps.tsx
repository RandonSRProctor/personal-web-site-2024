import { Outlet } from 'react-router';

export const Apps = () => {
  return (
    <>
      <header className="bg-blue-100 h-20 flex items-center justify-center">
        <div className="">Randy Proctor Apps</div>
      </header>
      <Outlet />;
    </>
  );
};
