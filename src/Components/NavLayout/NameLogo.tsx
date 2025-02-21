import { Link } from 'react-router';
import { useNavContext } from '../../hooks/useNavContext';

export const NameLogo = () => {
  const [navFormat, setNavFormat] = useNavContext();

  return (
    <div className="pl-4 flex flex-col justify-center">
      <Link to="/">
        <h1
          className={`transition-all duration-1000 pr-1 block flex  ${
            navFormat === 'centered'
              ? ' flex-col items-end text-4xl'
              : ' flex-row items-center text-2xl'
          }`}
          onClick={() => setNavFormat('centered')}
        >
          <div>R{navFormat === 'centered' ? <span>andy</span> : null}</div>
          <div>P{navFormat === 'centered' ? <span>roctor</span> : null}</div>
        </h1>
      </Link>
    </div>
  );
};
