// import nerd from './assets/nerd.webp';
import { useReducer, useState } from 'react';
import './App.css';
import { NavTitleButton } from './Components/NavTitleButton';
import { navTitles } from './constants/navTitles';
import { reducer } from './hooks/reducer';

const navTitleList = Object.values(navTitles);
const initialState = { activeNavTitle: undefined };

function App() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  // TODO BLOG IT UP

  return (
    <>
      <div className="BACKGROUNDS w-screen h-screen fixed -z-30">
        <div
          className={
            'OUTER-HEADSHOT bg-blue-300 border border-yellow-500 fixed z-10 rounded-full ' +
            (isCollapsed
              ? ' w-16 h-16 rounded-full outer-transition_corner'
              : 'outer-transition_fullscreen')
          }
        ></div>
        <div
          className={
            'INNER_HEADSHOT justify-center absolute z-20 rounded-full bg-headshot bg-blue-300 ' +
            (isCollapsed
              ? ' flex items-center w-16 h-16 bg-blue-300 rounded-full inner-transition_corner'
              : ' w-screen h-screen inner-transition_fullscreen')
          }
          onClick={() => (isCollapsed ? setIsCollapsed(false) : null)}
        >
          {isCollapsed ? (
            <div className="text-4xl">RP</div>
          ) : (
            <div className="pt-4 flex justify-around">
              <button onClick={() => setIsCollapsed(true)}>Blog</button>
              <button onClick={() => setIsCollapsed(true)}>About</button>
              <button onClick={() => setIsCollapsed(true)}>Contact</button>
            </div>
          )}
        </div>
        <div className="abslute z-0 w-full h-full">
          <header className="bg-blue-600 h-16 flex">
            <div className="w-20"></div>
            {navTitleList.map(title => (
              <NavTitleButton stateDispatch={[state, dispatch]}>
                {title}
              </NavTitleButton>
            ))}
          </header>
          <div className="BODY">
            <ul>
              <li>Software</li>
              <ul>
                <li>Use the WHAT, AS measured by</li>
                <li>Workspace Management System</li>
                <li>Core Features</li>
                <li>Written in JS/TS, Java, Go</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
