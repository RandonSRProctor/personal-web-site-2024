import { AppWindowMac, AtSign, BookOpenText, Info } from 'lucide-react';
import { LinkSquare } from './LinkSquare';

export const LandingMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center h-4/5">
      <div className="flex justify-center">
        <h1 className="text-yellow-50 text-4xl">
          Development by Randy Proctor
        </h1>
      </div>
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
  );
};
