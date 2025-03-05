import { useLocation } from 'react-router';
import { Div } from './utility/Div';
import { NavLinkFastClick } from './utility/NavLinkFastClick';

export const NameLogo = () => {
  const location = useLocation();

  const isRootPath = location.pathname === '/';

  return (
    <Div className="transition-all duration-1000 h-full flex">
      <NavLinkFastClick
        className={`transition-all h-16 w-16 duration-1000 border-2 border-yellow-700 rounded-full flex items-center justify-center shadow-red-900 ${
          !isRootPath ? 'shadow-m ' : ''
        }`}
        to="/"
      >
        <h1 className="transition-all duration-1000 text-xl block hover:underline">
          rsrp
        </h1>
      </NavLinkFastClick>
    </Div>
  );
};
