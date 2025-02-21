import { Div } from '../utility/Div';

export const Divider = () => {
  return (
    <Div
      className="flex items-center transision-all duration-1000"
      top="px-2"
      centered="px-4"
    >
      <Div
        className="transform rotate- transition-all duration-1000 rounded-full bg-slate-800 w-0.5"
        top="h-12"
        centered="h-24"
      />
    </Div>
  );
};
