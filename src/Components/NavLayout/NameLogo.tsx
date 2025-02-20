import { Link } from 'react-router';
import { useNavContext } from '../../hooks/useNavContext';

export const NameLogo = () => {
  const [navFormat, setNavFormat] = useNavContext();

  return (
    <div className="pl-4 flex flex-col justify-center">
      <Link to="/">
        <h1
          className={`transition-all duration-1000 pr-1 block flex flex-col ${
            navFormat === 'centered'
              ? ' items-end text-4xl'
              : ' items-center text-2xl'
          }`}
          onClick={() => setNavFormat('centered')}
        >
          <div>Randy</div>
          <div>Proctor</div>
        </h1>
      </Link>
    </div>
  );
};
