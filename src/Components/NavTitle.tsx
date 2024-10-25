import { Dispatch } from 'react';
import { Action, actionTypes, State } from '../hooks/reducer';
import { NavTitle } from '../constants/navTitles';

type NavTitleProps = {
  children: NavTitle;
  className?: string;
  stateDispatch: [State, Dispatch<Action>];
};

export const NavTitleButton = ({
  children,
  className,
  stateDispatch,
}: NavTitleProps) => {
  const [state, dispatch] = stateDispatch;
  const isSelected = state.activeNavTitle === children;
  const extraStyles = isSelected ? 'translate-y-20' : 'translate-y-0';
  return (
    <div
      className={`transition duration-700 w-1/6 border border-white ${extraStyles} ${className}`}
      onClick={() => {
        dispatch({ type: actionTypes.NAV_TITLE_SELECTED, payload: children });
      }}
    >
      {children}
    </div>
  );
};
