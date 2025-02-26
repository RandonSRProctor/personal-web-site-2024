type Props = {
  title: string;
  year: string;
  text: string;
  setBlurb: React.Dispatch<string>;
};

export const Point = ({ title, year, text, setBlurb }: Props) => {
  return (
    <>
      <div className="flex items-center w-96 py-2 ">
        <div className="STICK bg-yellow-500 h-2 w-8"></div>
        <button
          onClick={() => setBlurb(text)}
          className="flex border border-yellow-500 w-96 rounded "
        >
          <div className="BLURB flex flex-col items-start p-2 ">
            <div className="font-bold text-teal-400">{year}</div>
            <h1 className="font-bold text-red-400">{title}</h1>
            <div className="text-xs text-white">{text}</div>
          </div>
        </button>
      </div>
    </>
  );
};
