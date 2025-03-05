import { useLocation } from 'react-router';
import { NameLogo } from './NameLogo';
import { NavLinkFastClick } from './utility/NavLinkFastClick';

export const Header = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/';

  return (
    <header className="sticky top-0 h-24 pb-4">
      <div className="flex text-white bg-slate-700 h-full overflow-hidden rounded-2xl p-2 border border-slate-500 bg-opacity-70 backdrop-blur-sm">
        <NameLogo />
        {isRootPath ? null : (
          <ul
            className={`transition-all duration-500 flex items-center text-lg ${
              isRootPath ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <li className="pl-4">
              <NavLinkFastClick className="hover:underline" to="/Apps">
                <span>Apps</span>
              </NavLinkFastClick>
            </li>
            <li className="pl-4">
              <NavLinkFastClick className="hover:underline" to="/Career">
                <span>Career</span>
              </NavLinkFastClick>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
