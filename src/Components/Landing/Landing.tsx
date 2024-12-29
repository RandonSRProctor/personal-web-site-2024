import { Dispatch } from 'react';

type Props = {
  setPage: Dispatch<'Landing' | 'Home'>;
};

export const Landing = ({ setPage }: Props) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="bg-blue-200 rounded flex flex-col p-2">
        <h1 className="p-2 text-3xl">Welcome!</h1>

        <button
          className="border border-black rounded p-1"
          onClick={() => {
            setPage('Home');
          }}
        >
          Enter Site
        </button>
      </div>
    </div>
  );
};
