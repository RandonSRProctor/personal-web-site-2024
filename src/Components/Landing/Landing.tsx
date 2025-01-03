import { Dispatch } from 'react';

type Props = {
  setPage: Dispatch<'Landing' | 'Home'>;
};

export const Landing = ({ setPage }: Props) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-800">
      <div className="bg-emerald-600 border border-emerald-500 text-orange-100 text-xs rounded flex p-8">
        <div className="pr-2 flex flex-col justify-center">
          <h1 className="text-4xl px-0.5 block flex flex-col items-end">
            <div>Randy</div>
            <div>Proctor</div>
          </h1>
        </div>
        <div className="w-0.5 rounded-full bg-slate-800"></div>
        <nav className="pl-2">
          <h2 className="">About:</h2>
          <ul>
            <NavLink
              onClick={() => setPage('Home')}
              innerText="Career Overview"
            />
            <NavLink onClick={() => setPage('Home')} innerText="Resume" />
          </ul>
          <h2 className="">Software:</h2>
          <ul>
            <NavLink
              onClick={() => setPage('Home')}
              innerText="Testing Grounds"
            />
          </ul>
          <h2 className="">Contact:</h2>
          <ul>
            <NavLink onClick={() => setPage('Home')} innerText="LinkTree" />
          </ul>
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
      <div className="pl-4 flex">
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
