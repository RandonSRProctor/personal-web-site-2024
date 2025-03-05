import { useLocation } from 'react-router';
import { AppWindowMac, AtSign, BookOpenText, Info } from 'lucide-react';
import { LinkSquare } from './LinkSquare';

export const LandingMenu = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/';
  return isRootPath ? (
    <div className="flex flex-col justify-center items-center h-4/5">
      <ul className="flex justify-center text-white">
        <li className="p-4 sm:p-8">
          <LinkSquare Icon={AppWindowMac} to="/Apps" theme="pink">
            Apps
          </LinkSquare>
        </li>
        <li className="p-4 sm:p-8">
          <LinkSquare Icon={BookOpenText} to="/Career" theme="purple">
            Career
          </LinkSquare>
        </li>
      </ul>
      <ul className="flex justify-center text-white">
        <li className="p-4 sm:p-8">
          <LinkSquare Icon={AtSign} to="/Contact" theme="orange">
            Contact
          </LinkSquare>
        </li>
        <li className="p-4 sm:p-8">
          <LinkSquare Icon={Info} to="/About" theme="green">
            About
          </LinkSquare>
        </li>
      </ul>
    </div>
  ) : null;
};
