import { Link, useLocation } from 'react-router';
import { Div } from '../utility/Div';

export const NameLogo = () => {
  const location = useLocation();

  const isRootPath = location.pathname === '/';

  return (
    <Div
      className="transition-all duration-1000 flex flex-col justify-center"
      centered="pl-6"
      top="pl-4"
    >
      <Link
        className={`transition-all duration-1000 border border-yellow-900 rounded-full flex items-center bg-yellow-600 shadow-red-900 ${
          !isRootPath ? 'shadow-md' : 'shadow-xl'
        }`}
        to="/"
      >
        <h1 className="transition-all duration-1000 block flex flex-col">
          <div className="flex items-center ">
            <Div
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-all duration-1000 overflow-hidden pb-1 flex items-center justify-center"
              centered="w-0 h-24"
              top="w-16 h-16 text-xl hover:underline"
            >
              <div>rsrp</div>
            </Div>

            <Div
              className="transition-all duration-1000 overflow-hidden pb- flex items-center justify-center"
              centered="w-36 h-36"
              top="w-0 h-0"
            >
              <div className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] flex flex-col items-center text-3xl">
                <div>Randy</div>
                <div>Proctor</div>
              </div>
            </Div>
          </div>
        </h1>
      </Link>
    </Div>
  );
};
