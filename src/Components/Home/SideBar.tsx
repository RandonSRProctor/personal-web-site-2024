export const SideBar = () => {
  return (
    <div className="w-80 h-full">
      <div>
        <button>Category</button>
        <ul className="pl-2">
          <li>
            <button>SubCategory</button>
          </li>
          <li>
            <button>SubCategory</button>
          </li>
          <li>
            <button>SubCategory</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
