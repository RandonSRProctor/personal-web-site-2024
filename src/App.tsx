// import nerd from './assets/nerd.webp';
import { useState } from 'react';
import './App.css';

function App() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
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
            <div className="w-1/6 border border-white"></div>
            <div className="w-1/6 border border-white">Develop Software</div>
            <div className="w-1/6 border border-white">Produce Music</div>
            <div className="w-1/6 border border-white">Build Experiences</div>
            <div className="w-1/6 border border-white">Invest in People</div>
            <div className="w-1/6 border border-white">Contact</div>
          </header>
        </div>
      </div>
    </>
  );
}

export default App;
