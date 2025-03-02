import { NavLink, useLocation } from 'react-router';

export const NavLinks = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/';

  const determineNavLinkStyle = ({ isActive }: { isActive: boolean }) =>
    !isRootPath && !isActive ? 'hidden' : 'h-8 p-1  flex hover:underline';

  return (
    <nav className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] w-48 flex items-center">
      <div className="">
        <ul>
          <li className="pb-2">
            <NavLink className={determineNavLinkStyle} to="/Apps">
              <span>Apps</span>
            </NavLink>
          </li>

          <li>
            <NavLink className={determineNavLinkStyle} to="/Career">
              <span>Career</span>
            </NavLink>
          </li>
          {/* <li>
              <NavLink
              className={determineNavLinkStyle}
              to="/Blog"
              >
              <span>Blog</span>
              </NavLink>
              </li> */}
        </ul>
      </div>
      <div className="pl-2">
        <ul>
          <li className="pb-2">
            <NavLink className={determineNavLinkStyle} to="/About">
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={determineNavLinkStyle} to="/Contact">
              <span>Contact</span>
            </NavLink>
          </li>
          {/* <li>
              <NavLink
                className={determineNavLinkStyle}
                to="/RAD"
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
