// import nerd from './assets/nerd.webp';
import { useState } from 'react';
import './App.css';

function App() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <>
      <div className="Background">
        <div
          className={'Headshot ' + (isCollapsed ? '_collapsed' : '_fullscreen')}
          onClick={() => setIsCollapsed(state => !state)}
        ></div>
        <h1>click to enter</h1>
      </div>
    </>
  );
}

export default App;
