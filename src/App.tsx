// import nerd from './assets/nerd.webp';
import { useReducer, useState } from 'react';
import './App.css';
import { NavTitleButton } from './Components/NavTitle';
import { navTitles } from './constants/navTitles';
const {
  DEVELOP_SOFTWARE,
  PRODUCE_MUSIC,
  BUILD_EXPERIENCES,
  INVEST_IN_PEOPLE,
  CONTACT,
  UNDEFINED,
} = navTitles;
import { reducer } from './hooks/reducer';

const initialState = { activeNavTitle: undefined };

function App() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const stateDispatch = useReducer(reducer, initialState);

  return (
    <>
      <div className="w-screen h-screen fixed -z-20">
        <div
          className={
            'Headshot border border-green-500' +
            (isCollapsed ? ' _collapsed' : ' _fullscreen')
          }
          onClick={() => setIsCollapsed(state => !state)}
        ></div>
        <div className="w-full h-full bg-blue-400 ">
          <header className="flex">
            <NavTitleButton stateDispatch={stateDispatch}>
              {UNDEFINED}
            </NavTitleButton>
            <NavTitleButton stateDispatch={stateDispatch}>
              {DEVELOP_SOFTWARE}
            </NavTitleButton>
            <NavTitleButton stateDispatch={stateDispatch}>
              {PRODUCE_MUSIC}
            </NavTitleButton>
            <NavTitleButton stateDispatch={stateDispatch}>
              {BUILD_EXPERIENCES}
            </NavTitleButton>
            <NavTitleButton stateDispatch={stateDispatch}>
              {INVEST_IN_PEOPLE}
            </NavTitleButton>
            <NavTitleButton stateDispatch={stateDispatch}>
              {CONTACT}
            </NavTitleButton>
          </header>
        </div>
      </div>
    </>
  );
}

export default App;
