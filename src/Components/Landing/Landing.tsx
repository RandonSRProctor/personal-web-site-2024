import { Dispatch } from 'react';

type Props = {
  setPage: Dispatch<'Landing' | 'Home'>;
};

export const Landing = ({ setPage }: Props) => {
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
                <NavLink
                  onClick={() => setPage('Home')}
                  innerText="Career Overview"
                />
                <NavLink
                  onClick={() => setPage('Home')}
                  innerText="Resume (PDF)"
                />
              </ul>
            </div>
          </div>

          <div className="">
            <div className="p-2 rounded-r bg-emerald-600">
              <ul>
                <NavLink
                  onClick={() => setPage('Home')}
                  innerText="App Catalog"
                />
                <NavLink onClick={() => setPage('Home')} innerText="R&D" />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

type NavLinkProps = {
  onClick: () => void;
  innerText: string;
};

function NavLink({ onClick, innerText }: NavLinkProps) {
  return (
    <li>
      <div className="p-1 flex">
        <button
          className="hover:underline"
          onMouseDown={onClick}
          onClick={onClick}
        >
          {innerText}
        </button>
      </div>
    </li>
  );
}
