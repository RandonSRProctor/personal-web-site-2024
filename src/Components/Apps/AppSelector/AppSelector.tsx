import { Link } from 'react-router';

export const AppSelector = () => {
  return (
    <div className="p-4">
      <div className="w-1/2">
        <Link
          className="border border-black inline-block rounded w-full h-40 p-2 bg-blue-200"
          to="JsonGUI"
        >
          Json Gui
        </Link>
      </div>
    </div>
  );
};
