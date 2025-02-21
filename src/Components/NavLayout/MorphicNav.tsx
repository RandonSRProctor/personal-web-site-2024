import { NameLogo } from './NameLogo';
import { NavLinks } from './NavLinks';
import { useNavContext } from '../../hooks/useNavContext';
import { Breadcrumb } from './Breadcrumb';
import { Divider } from './Divider';

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
    <div
      className={`fixed z-20 top-0 transition-all duration-1000 flex justify-center items-center comment-bg-green-300 ${
        navFormat === 'centered' ? 'h-full w-full rounded-none' : 'h-20 w-full'
      }`}
    >
      {/* OUTER GREEN NAV MENU */}
      <header
        className={`transition-all duration-1000 bg-emerald-600 border border-emerald-500 text-orange-100 text-xl rounded flex ${
          navFormat === 'centered'
            ? 'h-40 w-96 p-8'
            : 'h-20 w-full p-2 rounded-none'
        }`}
      >
        {/* INNER GREEN NAV MENU */}
        <div className="flex justify-center">
          <NameLogo />
          <Divider />
          {navFormat === 'centered' ? <NavLinks /> : <Breadcrumb />}
        </div>
      </header>
    </div>
  );
};
