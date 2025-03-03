import { NavLink, NavLinkProps, useNavigate } from 'react-router';

export const NavLinkFastClick = (props: NavLinkProps) => {
  const navigate = useNavigate();
  const fastClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation();
    navigate(props.to);
  };
  return <NavLink onMouseDown={fastClick} {...props} />;
};
