type Props = {
  title: string;
  year: string;
  text: string;
  side: 'left' | 'right';
};

export const Point = ({ title, year, text, side }: Props) => {
  const flip = side === 'left' ? 'flex-row-reverse' : null;

  return (
    <>
      <div className={`DOUBLE_WRAP flex ${flip}`}>
        <div className="DUMMY flex w-48"></div>
        <div className={`flex items-center w-48 py-2 ${flip}`}>
          <div className="STICK bg-yellow-500 h-2 w-8"></div>
          <div className={`flex border border-yellow-500 w-36 rounded ${flip}`}>
            <div className="SVG p-2 flex items-center">
              <div className="border border-yellow-500 text-yellow-500 rounded">
                SVG
              </div>
            </div>
            <div className="BLURB p-2 ">
              <div className="font-bold text-teal-400">{year}</div>
              <h1 className="font-bold text-red-400">{title}</h1>
              <div className="text-xs text-white">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
