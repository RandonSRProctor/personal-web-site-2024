import { AppWindowMac, AtSign, BookOpenText, Info } from 'lucide-react';
import { LinkSquare } from './LinkSquare';

export const LandingMenu = () => {
  return (
    <>
      <div className="pt-32 flex justify-center">
        <h1 className="text-yellow-50 ">
          <div className="text-slate-400">development by</div>
          <div className=" text-5xl sm:text-6xl  md:text-7xl">
            Randy Proctor
          </div>
        </h1>
      </div>
      <div className="pt-16 md:pt-20 flex flex-col md:flex-row justify-center items-center ">
        <div className="flex justify-center"></div>
        <ul className="flex justify-center text-white">
          <li className="p-4">
            <LinkSquare Icon={AppWindowMac} to="/Apps" theme="pink">
              Apps
            </LinkSquare>
          </li>
          <li className="p-4">
            <LinkSquare Icon={BookOpenText} to="/Career" theme="purple">
              Career
            </LinkSquare>
          </li>
        </ul>
        <ul className="flex justify-center text-white">
          <li className="p-4">
            <LinkSquare Icon={AtSign} to="/Contact" theme="orange">
              Contact
            </LinkSquare>
          </li>
          <li className="p-4">
            <LinkSquare Icon={Info} to="/About" theme="green">
              About
            </LinkSquare>
          </li>
        </ul>
      </div>
    </>
  );
};
