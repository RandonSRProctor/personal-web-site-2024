import { Link } from 'react-router';

export const Landing = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-800">
      <div className="bg-emerald-600 border border-emerald-500 text-orange-100 text-xl rounded flex p-8">
        <div className="pr-2 flex flex-col justify-center">
          <h1 className="text-4xl px-0.5 block flex flex-col items-end">
            <div>Randy</div>
            <div>Proctor</div>
          </h1>
        </div>
        <div className="w-0.5 rounded-full bg-slate-800"></div>
        <nav className="flex">
          <div className="pl-2">
            <div className="p-2 rounded-l bg-emerald-600">
              <ul>
                <Link className="p-1 flex hover:underline" to="/RAD">
                  Career Overview
                </Link>
                <Link className="p-1 flex hover:underline" to="/RAD">
                  Resume (PDF)
                </Link>
              </ul>
            </div>
          </div>

          <div className="">
            <div className="p-2 rounded-r bg-emerald-600">
              <ul>
                <Link className="p-1 flex hover:underline" to="/RAD">
                  App Catalog
                </Link>
                <Link className="p-1 flex hover:underline" to="/RAD">
                  R&D
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
