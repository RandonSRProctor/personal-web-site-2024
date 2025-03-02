import { ReactNode } from 'react';
import { useLocation } from 'react-router';

type Props = {
  children?: ReactNode;
  className?: string;
  top?: string;
  centered?: string;
};

/**
 * A standard `<div>` element with extra props to cleanly add styles based on navFormat state
 */

export const Div = ({ children, className, top, centered }: Props) => {
  const location = useLocation();
  const dynamicStyles = location.pathname === '/' ? centered : top;

  return (
    <div className={`${className}  ${dynamicStyles}`}>
      {children ? children : null}
    </div>
  );
};
