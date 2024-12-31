export const Prism = () => {
  const glass = ' bg-opacity-40 backdrop-blur-sm shadow-xl';
  const all = ' ';

  const yellow = ' mb-4 h-60 w-40 bg-yellow-500 rounded-r-xl';
  const cyan = ' mb-4 h-40 w-60 bg-cyan-500 self-end rounded-l-xl';
  const fuchsia = ' h-20 w-80 bg-fuchsia-500 rounded-r-xl';

  return (
    <div>
      <div className="w-full h-full flex flex-col fixed z-10">
        <div className={`YELLOW ${glass + all + yellow}`}></div>
        <div className={`CYAN ${glass + all + cyan}`}></div>
        <div className={`FUCHSIA ${glass + all + fuchsia}`}></div>
      </div>
      <div className="w-full h-full flex flex-col fixed -z-10">
        <div className={`YELLOW ${all + yellow}`}></div>
        <div className={`CYAN ${all + cyan}`}></div>
        <div className={`FUCHSIA ${all + fuchsia}`}></div>
      </div>
      <div className="p-10 w-full h-full flex flex-col">
        <div className="mb-20 border border-black rounded h-40 w-20"></div>
        <div className="mb-20 border border-black rounded h-24 w-20 self-end"></div>
        <div className="border border-black rounded h-10 w-20"></div>
      </div>
    </div>
  );
};
