import { Dispatch } from 'react';
import { Link, NavLink } from 'react-router';

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
      {/* GREEN NAV MENU */}
      <div
        className={`transition-all duration-1000 bg-emerald-600 border border-emerald-500 text-orange-100 text-xl rounded flex ${
          format === 'centered'
            ? 'h-36 w-96 p-8'
            : 'h-20 w-full p-2 rounded-none'
        }`}
      >
        {/* RANDY PROCTOR */}
        <div className="pl-4 pr-4 flex flex-col justify-center">
          <Link to="/">
            <h1
              className={`transition-all duration-1000 pr-2 block flex flex-col ${
                format === 'centered'
                  ? ' items-end text-4xl'
                  : ' items-center text-2xl'
              }`}
              onClick={() => setFormat('centered')}
            >
              <div>Randy</div>
              <div>Proctor</div>
            </h1>
          </Link>
        </div>
        {/* DIVIDER */}
        <div className="w-0.5 h-full rounded-full bg-slate-800"></div>
        {/* NAV LINKS */}
        <nav className="flex items-center">
          <div className="pl-2">
            <div className="p-2 rounded-l bg-emerald-600">
              <ul>
                <li>
                  <NavLink className={determineNavLinkStyle} to="/Apps">
                    <span onClick={() => setFormat('top')}>Apps</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={determineNavLinkStyle} to="/Blog">
                    <span onClick={() => setFormat('top')}>Blog</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="p-2 rounded-r bg-emerald-600">
              <ul>
                <li>
                  <NavLink className={determineNavLinkStyle} to="/Career">
                    <span onClick={() => setFormat('top')}>Career</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={determineNavLinkStyle} to="/RAD">
                    <span onClick={() => setFormat('top')}>
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
  );
};
