import { LoremIpsum } from '../StandardSite/LoremIpsum';

export const Prism = () => {
  const glass = ' bg-opacity-40 backdrop-blur-sm shadow';
  const all = ' ';

  const yellow = ' mb-4 h-60 w-40 bg-yellow-500 rounded-r-xl';
  const cyan = ' mb-4 h-40 w-60 bg-cyan-500 self-end rounded-l-xl';
  const fuchsia = ' h-20 w-80 bg-fuchsia-500 rounded-r-xl';

  return (
    <div>
      <div className="w-full h-full border border-black flex flex-col fixed z-10">
        <div className={`YELLOW ${glass + all + yellow}`}></div>
        <div className={`CYAN ${glass + all + cyan}`}></div>
        <div className={`FUCHSIA ${glass + all + fuchsia}`}></div>
      </div>
      <div className="w-full h-full border border-black flex flex-col fixed -z-10">
        <div className={`YELLOW ${all + yellow}`}></div>
        <div className={`CYAN ${all + cyan}`}></div>
        <div className={`FUCHSIA ${all + fuchsia}`}></div>
      </div>
      <div className="p-10">
        <LoremIpsum className="pb-8" />
        <LoremIpsum className="pb-8" />
        <LoremIpsum className="pb-8" />
        <LoremIpsum className="pb-8" />
      </div>
    </div>
  );
};
