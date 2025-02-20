import { Dispatch, useState } from 'react';
import { NavLink, useLocation } from 'react-router';

type Props = {
  format: 'centered' | 'top';
  setFormat: Dispatch<'centered' | 'top'>;
};

export const NavLinkDropdown = ({ setFormat }: Props) => {
  const location = useLocation();
  const firstPath = location.pathname.split('/')[1];
  const secondPath = location.pathname.split('/')[2];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const titles = ['Apps', 'Blog', 'Career'] as const;
  if (firstPath !== '') {
    return (
      <div>
        <div className="h-full flex items-center">
          <button
            className={`flex items-center pt-0.5 pb-1 px-2 hover:bg-emerald-700 ${
              isDropdownOpen ? ' bg-emerald-700 rounded-t' : ' rounded'
            }`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {firstPath} &nbsp;
            {isDropdownOpen ? (
              <div className="text-xs pt-1">&#9650;</div>
            ) : (
              <div className="text-xs pt-1">&#9660;</div>
            )}{' '}
          </button>
          &nbsp; &nbsp; <span className="text-black">/</span> &nbsp; &nbsp;
          {secondPath}
        </div>

        <ul
          className={`flex flex-col bg-emerald-700 rounded-b pt-2 pl-2 relative -top-4 ${
            isDropdownOpen ? '' : 'hidden'
          }`}
        >
          {titles.map(title => {
            if (title !== firstPath) {
              return (
                <NavLink
                  className={'pb-2 hover:underline'}
                  to={`/${title}`}
                  onClick={() => {
                    setFormat('top');
                    setIsDropdownOpen(false);
                  }}
                >
                  <span>{title}</span>
                </NavLink>
              );
            }
          })}
        </ul>
      </div>
    );
  }

  if (firstPath === '') {
    return (
      <>
        <ul className="flex flex-col justify-center">
          <li>
            <NavLink className={''} to="/Apps" onClick={() => setFormat('top')}>
              <span>Apps</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={''} to="/Blog" onClick={() => setFormat('top')}>
              <span>Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={''}
              to="/Career"
              onClick={() => setFormat('top')}
            >
              <span>Career</span>
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
};
