import { useState } from 'react';
import './App.css';
import { LoremIpsum } from './Components/LoremIpsum';

function App() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // TODO BLOG IT UP
  // Container query your way to success
  // Smnooth scrolling from the viedo
  // https://www.youtube.com/watch?v=0rZywO6jdU4&t=561s
  // Maybe watch this? https://www.youtube.com/watch?v=IP_rtWEMR0o&t=1162s

  return (
    <>
      <div className="BACKGROUNDS w-screen h-screen fixed -z-30">
        <div className="LANDING_BUTTONS rounded bg-black opacity-50 text-white p-4 fixed bottom-1/2 z-40 flex flex-col">
          <div className="text-4xl pb-4">Nigel Proctor</div>
          <div className="flex justify-between">
            {['About', 'Blog', 'Contact'].map(title => (
              <button
                onClick={() => setIsCollapsed(isCollapsed => !isCollapsed)}
                className="border border-white rounded text-white p-1"
              >
                {title}
              </button>
            ))}
          </div>
        </div>
        <div
          className={
            'INNER_HEADSHOT justify-center absolute z-20 bg-headshot bg-blue-300 ' +
            (isCollapsed
              ? ' flex items-center w-16 h-16 bg-blue-300 rounded-full inner-transition_corner'
              : ' w-screen h-screen inner-transition_fullscreen')
          }
          onClick={() => setIsCollapsed(isCollapsed => !isCollapsed)}
        >
          {isCollapsed ? <div className="text-pink-400 text-4xl"></div> : null}
        </div>

        <div className="abslute z-0 w-full h-full">
          <header className="bg-blue-600 h-16 flex">
            <div className="w-20"></div>{' '}
          </header>
          <div className="BODY pt-2 px-2">
            <LoremIpsum count={5} className="pb-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
