import { NavLink } from 'react-router';
import { useNavContext } from '../../hooks/useNavContext';

export const NavLinks = () => {
  const [navFormat, setNavFormat] = useNavContext();

  const determineNavLinkStyle = ({ isActive }: { isActive: boolean }) =>
    navFormat === 'top' && !isActive
      ? 'hidden'
      : 'h-8 p-1 flex hover:underline';

  return (
    <nav className="w-48 flex items-center">
      <div className="">
        <ul>
          <li>
            <NavLink
              className={determineNavLinkStyle}
              to="/Apps"
              onClick={() => setNavFormat('top')}
            >
              <span>Apps</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={determineNavLinkStyle}
              to="/Career"
              onClick={() => setNavFormat('top')}
            >
              <span>Career</span>
            </NavLink>
          </li>
          {/* <li>
              <NavLink
              className={determineNavLinkStyle}
              to="/Blog"
              onClick={() => setNavFormat('top')}
              >
              <span>Blog</span>
              </NavLink>
              </li> */}
        </ul>
      </div>
      <div className="pl-2">
        <ul>
          <li>
            <NavLink
              className={determineNavLinkStyle}
              to="/About"
              onClick={() => setNavFormat('top')}
            >
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={determineNavLinkStyle}
              to="/Contact"
              onClick={() => setNavFormat('top')}
            >
              <span>Contact</span>
            </NavLink>
          </li>
          {/* <li>
              <NavLink
                className={determineNavLinkStyle}
                to="/RAD"
                onClick={() => setNavFormat('top')}
              >
                <span>
                  {' '}
                  <span>
                    R<span className="px-0.5 text-xs">&</span>D
                  </span>
                </span>
              </NavLink>
            </li> */}
        </ul>
      </div>
    </nav>
  );
};
