import { NameLogo } from './NameLogo';
import { NavLinks } from './NavLinks';
import { useNavContext } from '../../hooks/useNavContext';
import { Breadcrumb } from './Breadcrumb';
import { Div } from '../utility/Div';

/**
 * A navigation menu that changes with the state of the user journey.
 *
 * - center: Landing Menu
 * - mid: TBD
 * - top: Header at top of page
 */

export const MorphicNav = () => {
  const [navFormat] = useNavContext();

  return (
    // CONTAINER
    <Div
      className="fixed z-20 top-0 transition-all duration-1000 flex justify-center items-center comment-bg-green-300"
      centered="h-full w-full rounded-none"
      top="h-20 w-full"
    >
      {/* OUTER GREEN NAV MENU */}
      <nav
        className={`transition-all duration-1000 bg-emerald-600  text-orange-100 text-xl rounded flex ${
          navFormat === 'centered'
            ? 'h-52 w-96'
            : 'h-20 w-full py- rounded-none'
        }`}
      >
        {/* INNER GREEN NAV MENU */}
        <div className="flex content-center">
          <NameLogo />
          <Div top="w-2" centered="w-4" />
          {navFormat === 'centered' ? <NavLinks /> : <Breadcrumb />}
        </div>
      </nav>
    </Div>
  );
};
