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

  return (
    <>
      <div className="w-screen h-screen fixed -z-20">
        <div
          className={
            'Headshot z-10' + (isCollapsed ? ' _collapsed' : ' _fullscreen')
          }
          onClick={() => setIsCollapsed(state => !state)}
        ></div>
        <div className="w-full h-full">
          <header className="bg-blue-300 h-16 flex">
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
