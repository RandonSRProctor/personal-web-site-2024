import { NavLink, NavLinkProps, useNavigate } from 'react-router';

/**
 * Extension of react-router NavLink with snappy onMouseDown response.
 */

export const NavLinkFastClick = (props: NavLinkProps) => {
  const navigate = useNavigate();
  const fastClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation();
    navigate(props.to);
  };
  return (
    <NavLink className="hover:underline" onMouseDown={fastClick} {...props} />
  );
};
