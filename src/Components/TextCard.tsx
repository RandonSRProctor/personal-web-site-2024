import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const TextCard = ({ children }: Props) => {
  return (
    <div className="bg-white bg-opacity-10 rounded shadow p-2 text-xl">
      {children}
    </div>
  );
};
