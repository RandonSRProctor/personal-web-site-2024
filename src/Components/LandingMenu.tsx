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
          <LinkSquare
            Icon={AppWindowMac}
            to="/Apps"
            text="Apps"
            bgStyles="pink"
          />
        </li>
        <li className="p-4 sm:p-8">
          <LinkSquare
            Icon={BookOpenText}
            to="/Career"
            text="Career"
            bgStyles="purple"
          />
        </li>
      </ul>
      <ul className="flex justify-center text-white">
        <li className="p-4 sm:p-8">
          <LinkSquare
            Icon={AtSign}
            to="/Contact"
            text="Contact"
            bgStyles="orange"
          />
        </li>
        <li className="p-4 sm:p-8">
          <LinkSquare Icon={Info} to="/About" text="About" bgStyles="green" />
        </li>
      </ul>
    </div>
  ) : null;
};
