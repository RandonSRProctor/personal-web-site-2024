import { Link } from 'react-router';
import { useNavContext } from '../../hooks/useNavContext';
import { Div } from '../utility/Div';

export const NameLogo = () => {
  const [, setNavFormat] = useNavContext();

  return (
    <Div
      className="transition-all duration-1000 flex flex-col justify-center"
      centered="pl-6"
      top="pl-4"
    >
      <Link
        className="rounded-full flex items-center bg-yellow-600 shadow-xl"
        to="/"
      >
        <h1
          className="transition-all duration-1000 block flex flex-col"
          onClick={() => setNavFormat('centered')}
        >
          <div className="flex items-center ">
            <Div
              className="transition-all duration-1000 overflow-hidden pb-1 flex items-center justify-center"
              centered="w-0 h-24"
              top="w-16 h-16 text-xl hover:underline"
            >
              <div>rsrp</div>
            </Div>

            <Div
              className="transition-all duration-1000 overflow-hidden pb-1 flex items-center justify-center"
              centered="w-40 h-40"
              top="w-0 h-0"
            >
              <div className="flex flex-col items-center text-4xl">
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
