import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Content = ({ children }: Props) => {
  return <div className="w-full">{children}</div>;
};
