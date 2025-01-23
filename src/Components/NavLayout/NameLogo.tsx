import { Dispatch } from 'react';
import { Link } from 'react-router';

type Props = {
  format: 'centered' | 'top';
  setFormat: Dispatch<'centered' | 'top'>;
};

export const NameLogo = ({ format, setFormat }: Props) => {
  return (
    <div className="p-4 flex flex-col justify-center">
      <Link to="/">
        <h1
          className={`transition-all duration-1000 pr-2 block flex flex-col ${
            format === 'centered'
              ? ' items-end text-4xl'
              : ' items-center text-2xl'
          }`}
          onClick={() => setFormat('centered')}
        >
          <div>Randy</div>
          <div>Proctor</div>
        </h1>
      </Link>
    </div>
  );
};
