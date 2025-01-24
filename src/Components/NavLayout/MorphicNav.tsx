import { Dispatch } from 'react';
import { NameLogo } from './NameLogo';
import { NavLinks } from './NavLinks';

type Props = {
  format: 'centered' | 'top';
  setFormat: Dispatch<'centered' | 'top'>;
};

export const MorphicNav = ({ format, setFormat }: Props) => {
  return (
    // CONTAINER
    <div
      className={`fixed top-0 transition-all duration-1000 flex justify-center items-center comment-bg-green-300 ${
        format === 'centered' ? 'h-full w-full rounded-none' : 'h-20 w-full'
      }`}
    >
      {/* OUTER GREEN NAV MENU */}
      <div
        className={`transition-all duration-1000 bg-emerald-600 border border-emerald-500 text-orange-100 text-xl rounded flex ${
          format === 'centered'
            ? 'h-40 w-96 p-8'
            : 'h-20 w-full p-2 rounded-none'
        }`}
      >
        {/* INNER GREEN NAV MENU */}
        <div className="flex justify-center">
          <NameLogo format={format} setFormat={setFormat} />
          <div
            className={`DIVIDER transition-all duration-1000 h-full rounded-full  ${
              format === 'top' ? ' bg-emerald-600 w-0' : ' bg-slate-800 w-0.5'
            }`}
          ></div>
          <NavLinks format={format} setFormat={setFormat} />
        </div>
      </div>
    </div>
  );
};
