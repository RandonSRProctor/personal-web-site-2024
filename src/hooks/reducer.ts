import { NavTitle } from '../constants/navTitles';

export const actionTypes = {
  NAV_TITLE_SELECTED: 'NAV_TITLE_SELECTED',
} as const;

export type State = {
  activeNavTitle: NavTitle;
};

export type Action = {
  type: keyof typeof actionTypes;
  payload: NavTitle;
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case actionTypes.NAV_TITLE_SELECTED:
      return {
        ...state,
        activeNavTitle:
          action.payload === state.activeNavTitle ? undefined : action.payload,
      };
    default:
      return state;
  }
}
