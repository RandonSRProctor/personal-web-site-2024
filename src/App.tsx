import { useReducer, useState } from 'react';
import './App.css';
import { navTitles } from './constants/navTitles';
import { reducer } from './hooks/reducer';

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
            'INNER_HEADSHOT justify-center absolute z-20 bg-headshot bg-blue-300 ' +
            (isCollapsed
              ? ' flex items-center w-16 h-16 bg-blue-300 rounded-full inner-transition_corner'
              : ' w-screen h-screen inner-transition_fullscreen')
          }
          onClick={() => (isCollapsed ? setIsCollapsed(false) : null)}
        >
          {isCollapsed ? <div className="text-pink-400 text-4xl"></div> : null}
        </div>
        <div className="abslute z-0 w-full h-full">
          <header className="bg-blue-600 h-16 flex">
            <div className="w-20"></div>{' '}
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
