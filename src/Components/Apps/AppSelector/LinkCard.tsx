import { Link } from 'react-router';

type Props = {
  to: string;
  title: string;
};

export const LinkCard = ({ to, title }: Props) => {
  return (
    <div className="pt-2">
      <Link
        className="flex items-center justify-center text-orange-100 border border-black inline-block rounded w-full h-40 p-2 bg-slate-600 hover:bg-slate-500 hover:underline"
        to={to}
      >
        {title}
      </Link>
    </div>
  );
};
