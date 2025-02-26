import { NameLogo } from './NameLogo';
import { NavLinks } from './NavLinks';
import { useNavContext } from '../../hooks/useNavContext';
import { Breadcrumb } from './Breadcrumb';
import { Divider } from './Divider';
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
      <header
        // style={{ boxShadow: 'inset  1px 1px 5px 1px black ' }}
        className={`transition-all duration-1000 bg-emerald-600  text-orange-100 text-xl rounded flex ${
          navFormat === 'centered'
            ? 'h-40 w-96 p-8'
            : 'h-20 w-full py- rounded-none'
        }`}
      >
        {/* INNER GREEN NAV MENU */}
        <div className="flex justify-center">
          <NameLogo />
          <Divider />
          {navFormat === 'centered' ? <NavLinks /> : <Breadcrumb />}
        </div>
      </header>
    </Div>
  );
};
