import { Outlet, useLocation } from 'react-router';
import { Header } from '../Header';
import { LandingMenu } from '../LandingMenu';
import { SwitchContent } from '../utility/SwitchContent';

export const Root = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/';
  return (
    <div className="bg-slate-800 justify-center">
      <div className="min-h-screen m-auto max-w-[1200px] bg-slate-8 shadow-gray-600 shadow-2xl pb-4 px-4">
        <Header />
        <section className=" min-h-[calc(100vh-7rem)]">
          <SwitchContent
            condition={isRootPath}
            IfTrueRender={LandingMenu}
            IfFalseRender={Outlet}
          />
        </section>
      </div>
    </div>
  );
};
