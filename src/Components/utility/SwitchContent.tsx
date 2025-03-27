import { Outlet } from 'react-router';

type SwitchContentProps = {
  condition: boolean;
  IfTrueRender: typeof Outlet;
  IfFalseRender: typeof Outlet;
};

/**
 * Switches between two components with nice fade-in transition
 */

export const SwitchContent = ({
  condition,
  IfTrueRender,
  IfFalseRender,
}: SwitchContentProps) => {
  return (
    <>
      <div
        className={`transition-all duration-500 ${
          condition ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {condition ? <IfTrueRender /> : null}
      </div>
      <div
        className={`transition-all duration-500 ${
          condition ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {condition ? null : <IfFalseRender />}
      </div>
    </>
  );
};
