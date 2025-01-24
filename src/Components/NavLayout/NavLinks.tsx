import { Dispatch } from 'react';
import { NavLink } from 'react-router';

type Props = {
  format: 'centered' | 'top';
  setFormat: Dispatch<'centered' | 'top'>;
};

export const NavLinks = ({ format, setFormat }: Props) => {
  const determineNavLinkStyle = ({ isActive }: { isActive: boolean }) =>
    format === 'top' && !isActive ? 'hidden' : 'h-8 p-1 flex hover:underline';

  return (
    <nav className="pr-4 flex items-center">
      <div className="">
        <div className="">
          <ul>
            <li>
              <NavLink
                className={determineNavLinkStyle}
                to="/Apps"
                onClick={() => setFormat('top')}
              >
                <span>Apps</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={determineNavLinkStyle}
                to="/Blog"
                onClick={() => setFormat('top')}
              >
                <span>Blog</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="pl-2">
          <ul>
            <li>
              <NavLink
                className={determineNavLinkStyle}
                to="/Career"
                onClick={() => setFormat('top')}
              >
                <span>Career</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={determineNavLinkStyle}
                to="/RAD"
                onClick={() => setFormat('top')}
              >
                <span>
                  {' '}
                  <span>
                    R<span className="px-0.5 text-xs">&</span>D
                  </span>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
