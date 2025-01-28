import { Link } from 'react-router';

export const AppSelector = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      {/* General Apps */}
      <section className="w-full sm:w-1/2 p-4">
        <header>
          <h1 className="pt-2 text-2xl text-orange-100">General</h1>
          <p className="text-sm text-orange-100">Utilities & Games</p>
        </header>
        {/* JSON GUI */}
        <div className="pt-2">
          <Link
            className="flex items-center justify-center text-orange-100 border border-black inline-block rounded w-full h-40 p-2 bg-slate-600 hover:bg-slate-500 hover:underline"
            to="JsonGUI"
          >
            Json Gui
          </Link>
        </div>
        {/* Conversation Timer */}
        <div className="pt-2">
          <Link
            className="flex items-center justify-center text-orange-100 border border-black inline-block rounded w-full h-40 p-2 bg-slate-600 hover:bg-slate-500 hover:underline"
            to="."
          >
            Conversation Timer
          </Link>
        </div>
      </section>
      {/* Demos & POCs */}
      <section className="w-full sm:w-1/2 p-4">
        <header>
          <h1 className="pt-2 text-2xl text-orange-100">Demos</h1>
          <p className="text-sm text-orange-100">
            Apps to support lectures and blog posts
          </p>
        </header>
        {/* Inertia */}
        <div className="pt-2">
          <Link
            className="flex items-center justify-center text-orange-100 border border-black inline-block rounded w-full h-40 p-2 bg-slate-600 hover:bg-slate-500 hover:underline"
            to="."
          >
            Inertia 4.0 (Water Physics Simulator)
          </Link>
        </div>
        {/* React Rendering Patterns */}
        <div className="pt-2">
          <Link
            className="flex items-center justify-center text-orange-100 border border-black inline-block rounded w-full h-40 p-2 bg-slate-600 hover:bg-slate-500 hover:underline"
            to="."
          >
            React Rendering Patterns
          </Link>
        </div>
      </section>
    </div>
  );
};
