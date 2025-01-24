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
      className={`fixed z-20 top-0 transition-all duration-1000 flex justify-center items-center comment-bg-green-300 ${
        format === 'centered' ? 'h-full w-full rounded-none' : 'h-20 w-full'
      }`}
    >
      {/* OUTER GREEN NAV MENU */}
      <header
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
            className={`DIVIDER_OUTER flex items-center transision-all duration-1000 ${
              format === 'top' ? ' px-2' : ' px-4'
            }`}
          >
            <div
              className={`DIVIDER transition-all duration-1000 rounded-full  ${
                format === 'top'
                  ? 'h-12 bg-slate-800 w-0.5'
                  : 'h-24 bg-slate-800 w-0.5'
              }`}
            ></div>
          </div>
          <NavLinks format={format} setFormat={setFormat} />
        </div>
      </header>
    </div>
  );
};
