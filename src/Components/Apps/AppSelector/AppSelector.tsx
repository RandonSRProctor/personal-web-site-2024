import { Link } from 'react-router';

export const AppSelector = () => {
  return (
    <div className="p-4">
      <Link
        className="border border-black inline-block rounded p-2 bg-blue-200"
        to="JsonGUI"
      >
        Json Gui
      </Link>
    </div>
  );
};
