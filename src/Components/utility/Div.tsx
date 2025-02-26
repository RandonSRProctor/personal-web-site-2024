import { ReactNode } from 'react';
import { useNavContext } from '../../hooks/useNavContext';

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
  const [navFormat] = useNavContext();

  const dynamicStyle = {
    top,
    centered,
  };

  return (
    <div className={`${className}  ${dynamicStyle[navFormat]}`}>
      {children ? children : null}
    </div>
  );
};
