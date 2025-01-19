import { Link } from 'react-router';

export const Landing = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-800">
      <div className="bg-emerald-600 border border-emerald-500 text-orange-100 text-xl rounded flex p-8">
        <div className="pr-4 flex flex-col justify-center">
          <h1 className="text-4xl pr-2 block flex flex-col items-end">
            <div>Randy</div>
            <div>Proctor</div>
          </h1>
        </div>
        <div className="w-0.5 rounded-full bg-slate-800"></div>
        <nav className="flex">
          <div className="pl-2">
            <div className="p-2 rounded-l bg-emerald-600">
              <ul>
                <Link className="p-1 flex hover:underline" to="/Apps">
                  Apps
                </Link>
                <Link className="p-1 flex hover:underline" to="/Blog">
                  Blog
                </Link>
              </ul>
            </div>
          </div>

          <div className="">
            <div className="p-2 rounded-r bg-emerald-600">
              <ul>
                <Link className="p-1 flex hover:underline" to="/Career">
                  Career
                </Link>
                <Link
                  className="p-1 flex items-center hover:underline"
                  to="/RAD"
                >
                  R<span className="px-0.5 text-xs">&</span>D
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
