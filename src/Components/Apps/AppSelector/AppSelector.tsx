import { Link } from 'react-router';

export const AppSelector = () => {
  return (
    <div className="p-4">
      <div className="w-1/2">
        <Link
          className="flex items-center justify-center text-orange-100 border border-black inline-block rounded w-full h-40 p-2 bg-slate-600 hover:bg-slate-500 hover:underline"
          to="JsonGUI"
        >
          Json Gui
        </Link>
      </div>
    </div>
  );
};
