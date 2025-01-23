import { Dispatch } from 'react';
import { NavLink } from 'react-router';
import { NameLogo } from './NameLogo';

type Props = {
  format: 'centered' | 'top';
  setFormat: Dispatch<'centered' | 'top'>;
};

export const MorphicNav = ({ format, setFormat }: Props) => {
  const determineNavLinkStyle = ({ isActive }: { isActive: boolean }) =>
    format === 'top' && !isActive ? 'hidden' : 'h-8 p-1 flex hover:underline';

  return (
    // CONTAINER
    <div
      className={`fixed top-0 transition-all duration-1000 flex justify-center items-center comment-bg-green-300 ${
        format === 'centered' ? 'h-full w-full rounded-none' : 'h-20 w-full'
      }`}
    >
      {/* OUTER GREEN NAV MENU */}
      <div
        className={`transition-all duration-1000 bg-emerald-600 border border-emerald-500 text-orange-100 text-xl rounded flex ${
          format === 'centered'
            ? 'h-40 w-96 p-8'
            : 'h-20 w-full p-2 rounded-none'
        }`}
      >
        {/* INNER GREEN NAV MENU */}
        <div className="flex justify-center">
          <NameLogo format={format} setFormat={setFormat} />
          {/* DIVIDER */}
          <div className="w-0.5 h-full rounded-full bg-slate-800"></div>
          {/* NAV LINKS */}
          <nav className="px-4 flex items-center">
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
        </div>
      </div>
    </div>
  );
};
