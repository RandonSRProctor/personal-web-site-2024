import { useLocation } from 'react-router';
import { NameLogo } from './NameLogo';
import { NavLinkFastClick } from './utility/NavLinkFastClick';

export const Header = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/';
  const firstPath = location.pathname.split('/')[1];

  return (
    <header className="pt-4 sticky top-0 h-24 pb-4">
      <div className="flex text-white bg-slate-800 h-full overflow-hidden rounded-2xl p-2 border border-slate-700 bg-opacity-60 backdrop-blur-sm">
        <NameLogo />
        {isRootPath ? null : (
          <ul
            className={`transition-all duration-500 flex items-center text-lg ${
              isRootPath ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <li className="pl-4">
              <NavLinkFastClick to={`/${firstPath}`}>
                <span>{firstPath}</span>
              </NavLinkFastClick>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
