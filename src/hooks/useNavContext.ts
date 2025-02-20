import { useContext, createContext, Dispatch } from 'react';
import { NavFormat } from '../types';

function fillerFunc(navFormat: NavFormat): void {
  throw new Error(
    `setNavFormat called with "${navFormat}" as argument before function binding.  This should not happen.`
  );
}

export const NavContext = createContext<NavFormat>('centered');

export const DispatchNavContext = createContext<
  Dispatch<NavFormat> | (() => void)
>(fillerFunc);

export function useNavContext() {
  return [useContext(NavContext), useContext(DispatchNavContext)] as const;
}
