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
        {/* <div
          className={
            'OUTER-HEADSHOT bg-black border border-yellow-500 fixed z-10 rounded-full ' +
            (isCollapsed
              ? ' w-16 h-16 rounded-full outer-transition_corner'
              : 'outer-transition_fullscreen')
          }
        ></div> */}
        <div
          className={
            'INNER_HEADSHOT justify-center absolute z-20  bg-headshot bg-blue-300 ' +
            (isCollapsed
              ? ' flex items-center w-16 h-16 bg-blue-300 rounded-full inner-transition_corner'
              : ' w-screen h-screen inner-transition_fullscreen')
          }
          onClick={() => (isCollapsed ? setIsCollapsed(false) : null)}
        >
          {isCollapsed ? (
            <div className="text-pink-400 text-4xl"></div>
          ) : (
            <div className="pb-2 pt-2 flex text-white justify-around">
              <button
                className="bg-black bg-opacity-50 p-2 rounded-full"
                onClick={() => setIsCollapsed(true)}
              >
                Blog
              </button>
              <button
                className="bg-black bg-opacity-50 p-2 rounded-full"
                onClick={() => setIsCollapsed(true)}
              >
                About
              </button>
              <button
                className="bg-black bg-opacity-50 p-2 rounded-full"
                onClick={() => setIsCollapsed(true)}
              >
                Contact
              </button>
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
              <li>Music</li>
              <ul>
                <li>Production</li>
                <li>Live Performances</li>
                <li>Studio Collaberations</li>
                <li>Guitar, Bass, Keys</li>
              </ul>
            </ul>
            <ul>
              <li>Software</li>
              <ul>
                <li>Enterprise eCommerce</li>
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
