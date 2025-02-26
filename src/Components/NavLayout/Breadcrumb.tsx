import { Link, useLocation } from 'react-router';

export const Breadcrumb = () => {
  const location = useLocation();
  const firstPath = location.pathname.split('/')[1];
  const secondPath = location.pathname.split('/')[2];
  return (
    <div className="flex items-center">
      <Link className="hover:underline" to={`/${firstPath}`}>
        {firstPath}
      </Link>
      {secondPath ? (
        <Link className="flex" to={`/${firstPath}/${secondPath}`}>
          <span>:&nbsp;&nbsp;</span>
          <span className="hover:underline">{secondPath}</span>
        </Link>
      ) : null}
    </div>
  );
};
