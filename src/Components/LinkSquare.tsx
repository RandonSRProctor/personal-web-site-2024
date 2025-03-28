import { LucideProps } from 'lucide-react';
import { NavLinkFastClick } from './utility/NavLinkFastClick';

type LinkSquareProps = {
  to: string;
  children: string;
  theme: 'pink' | 'purple' | 'orange' | 'green';
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
};

const colorTheme = {
  pink: 'border border-pink-400 shadow shadow-pink-700 bg-gradient-to-br from-purple-400 via-pink-500 to-rose-600',
  purple:
    'border border-indigo-400 shadow shadow-indigo-700 bg-gradient-to-br from-violet-400 via-indigo-500 to-indigo-600',
  orange:
    'border border-orange-400 shadow shadow-orange-700 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600',
  green:
    'border border-green-400 shadow shadow-green-700 bg-gradient-to-br from-lime-400 via-green-500 to-teal-600',
} as const;

export const LinkSquare = ({ to, children, theme, Icon }: LinkSquareProps) => {
  return (
    <NavLinkFastClick
      className={`text-md relative block flex flex-col items-center justify-end pb-2 w-36 h-24 rounded-xl hover:underline ${colorTheme[theme]}`}
      to={to}
    >
      <span className="absolute top-4">
        <Icon size={36} />
      </span>
      <span>{children}</span>
    </NavLinkFastClick>
  );
};
