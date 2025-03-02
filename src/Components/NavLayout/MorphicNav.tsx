import { Div } from '../utility/Div';
import { useLocation } from 'react-router';
import { ReactElement } from 'react';

/**
 * A navigation menu that changes with the state of the user journey.
 *
 * - center: Landing Menu
 * - mid: TBD
 * - top: Header at top of page
 */

export const MorphicNav = ({ children }: { children?: ReactElement[] }) => {
  const location = useLocation();
  const isRootPath = location.pathname === '/';

  return (
    // CONTAINER
    <Div
      className="fixed z-20 top-0 transition-all duration-1000 flex justify-center items-center comment-bg-green-300"
      centered="h-full w-full rounded-none"
      top="h-20 w-full"
    >
      {/* OUTER GREEN NAV MENU */}
      <nav
        className={`bg-[url("/src/assets/noise.svg")] to-blue-500 overflow-hidden shadow-sm shadow-sky-5
          00 transition-all duration-1000 shadow shadow-2xl text-orange-100 text-xl rounded flex ${
            isRootPath ? 'h-56 w-96' : 'h-20 w-full py- rounded-none'
          }`}
      >
        {/* INNER GREEN NAV MENU */}
        <div className="bg-sky-800 bg-opacity-80 w-full flex content-center">
          {children}
        </div>
      </nav>
    </Div>
  );
};
