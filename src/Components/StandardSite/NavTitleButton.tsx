import { Dispatch } from 'react';
import { Action, actionTypes, State } from '../../hooks/reducer';
import { NavTitle } from '../../constants/navTitles';

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
  const extraStyles = isSelected ? 'translate-y-2' : 'translate-y-0';
  return (
    <div
      className={`flex items-center transition duration-700    ${extraStyles} ${className}`}
      onClick={() => {
        dispatch({ type: actionTypes.NAV_TITLE_SELECTED, payload: children });
      }}
    >
      <span className="pr-2 shadow text-white rounded-full text-center text-sm">
        {children}
      </span>
    </div>
  );
};
