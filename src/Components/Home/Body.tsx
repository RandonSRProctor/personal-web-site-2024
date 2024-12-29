import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Body = ({ children }: Props) => {
  return <div className="h-full w-full flex">{children}</div>;
};
