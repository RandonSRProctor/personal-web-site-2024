type Props = {
  y: 'top' | 'bottom';
};

export const ThumbControl = ({ y }: Props) => {
  return (
    <div
      className={`w-full h-16 flex ${
        y == 'top' ? 'items-start top-0' : 'items-end bottom-0'
      } justify-around bg-emerald-300 bg-opacity-40 backdrop-blur-sm shadow fixed`}
    >
      <div className="h-full rounded py-2">
        <button className="h-full p-2 shaddow text-2xl bg-emerald-500">
          Randy P
        </button>
      </div>
      {['About', 'Blog', 'Contact'].map((title, index) => (
        <a
          href={`#${title}`}
          className={`h-5/6 bg-sky-300 bg-opacity-50 shadow text-2xl px-2
            ${y === 'top' ? 'rounded-b' : 'rounded-t'}`}
          key={index}
        >
          {title}
        </a>
      ))}
    </div>
  );
};
