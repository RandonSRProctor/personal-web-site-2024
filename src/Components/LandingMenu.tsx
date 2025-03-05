import { useLocation } from 'react-router';
import { NavLinkFastClick } from './utility/NavLinkFastClick';

export const LandingMenu = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/';
  return isRootPath ? (
    <div className="flex flex-col justify-center items-center h-4/5">
      <ul className="flex justify-center text-white">
        <li className="p-4 sm:p-8">
          <NavLinkFastClick
            className="text-xl block border border-pink-400 shadow shadow-pink-700 flex justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-rose-600 w-40 p-14 rounded hover:underline"
            to="/Apps"
          >
            <span>Apps</span>
          </NavLinkFastClick>
        </li>
        <li className="p-4 sm:p-8">
          <NavLinkFastClick
            className="text-xl block border border-indigo-400 shadow shadow-indigo-700 flex justify-center bg-gradient-to-br from-violet-400 via-indigo-500 to-indigo-600 w-40 p-14 rounded hover:underline"
            to="/Career"
          >
            <span>Career</span>
          </NavLinkFastClick>
        </li>
      </ul>
      <ul className="flex justify-center text-white">
        <li className="p-4 sm:p-8">
          <NavLinkFastClick
            className="text-xl block border border-orange-400 shadow shadow-orange-700 flex justify-center bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 w-40 p-14 rounded hover:underline"
            to="/Contact"
          >
            <span>Contact</span>
          </NavLinkFastClick>
        </li>
        <li className="p-4 sm:p-8">
          <NavLinkFastClick
            className="text-xl block border border-green-400 shadow shadow-green-700 flex justify-center bg-gradient-to-br from-lime-400 via-green-500 to-teal-600 w-40 p-14 rounded hover:underline"
            to="/about"
          >
            <span>About</span>
          </NavLinkFastClick>
        </li>
      </ul>
    </div>
  ) : null;
};
