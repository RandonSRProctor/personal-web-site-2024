export const NavBar = () => {
  return (
    <div className="w-full h-20 flex justify-around bg-yellow-500 bg-opacity-40 backdrop-blur-sm shadow fixed items-end sm:items-start bottom-0 sm:top-0">
      <div className="h-full rounded py-2">
        <button className="h-full p-2 shaddow rounded-full text-2xl bg-emerald-500">
          RP
        </button>
      </div>
      {['About', 'Blog', 'Contact'].map((title, index) => (
        <a
          href={`#${title}`}
          className="content-center h-5/6 bg-emerald-500 bg-opacity-100 shadow text-2xl px-2 rounded-t sm:rounded-t-none sm:rounded-b"
          key={index}
        >
          {title}
        </a>
      ))}
    </div>
  );
};
