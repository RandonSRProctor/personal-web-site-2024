import { Outlet, useLocation } from 'react-router';
import { AppSelector } from './AppSelector/AppSelector';
import { SwitchContent } from '../utility/SwitchContent';

export const Apps = () => {
  const location = useLocation();
  const isAppsPath = location.pathname === '/Apps';
  return (
    <SwitchContent
      condition={isAppsPath}
      IfTrueRender={AppSelector}
      IfFalseRender={Outlet}
    />
  );
};
