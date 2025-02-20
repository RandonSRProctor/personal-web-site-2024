import { ReactNode } from 'react';

type Props = {
  heading: string;
  subtext: string;
  children: ReactNode;
};

export const LinkCardGroup = ({ heading, subtext, children }: Props) => {
  return (
    <section className="w-full sm:w-1/2 p-4">
      <header>
        <h1 className="pt-2 text-2xl text-orange-100">{heading}</h1>
        <p className="text-sm text-orange-100">{subtext}</p>
      </header>
      {children}
    </section>
  );
};
