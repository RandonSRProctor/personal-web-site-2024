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
      <div
        className={`LANDING_BUTTONS rounded bg-white bg-opacity-50 fixed z-40 flex flex-col ${
          isCollapsed ? 'top-0 left-24 p-2' : 'p-4 right-0 top-1/2'
        }`}
      >
        <div className="text-4xl pb-4">
          {isCollapsed ? null : 'Nigel Proctor'}
        </div>
        <div className="flex justify-between">
          {['About', 'Blog', 'Contact'].map((title, index) => (
            <a
              href={`#${title}`}
              onClick={() => setIsCollapsed(isCollapsed => !isCollapsed)}
              className="border border-black rounded p-1"
              key={index}
            >
              {title}
            </a>
          ))}
        </div>
      </div>
      <div
        className={
          'NIGEL_PHOTO justify-center absolute z-20 bg-headshot bg-blue-300 ' +
          (isCollapsed
            ? ' flex items-center w-24 h-24 rounded-full inner-transition_corner'
            : ' w-screen h-screen inner-transition_fullscreen')
        }
        onClick={() => setIsCollapsed(isCollapsed => !isCollapsed)}
      >
        {isCollapsed ? <div className="text-pink-400 text-4xl"></div> : null}
      </div>

      <header className="bg-blue-600 h-20 sticky top-0"></header>
      <div className="abslute z-0 w-full h-full">
        <div className="BODY pt-8 px-8">
          <h1 id="About" className="text-4xl pb-4">
            About
          </h1>
          <LoremIpsum count={2} className="pb-8" />
          <h1 id="Blog" className="text-4xl pb-4">
            Blog
          </h1>
          <LoremIpsum count={2} className="pb-8" />
          <h1 id="Contact" className="text-4xl pb-4">
            Contact
          </h1>
          <LoremIpsum count={2} className="pb-8" />
        </div>
      </div>
    </>
  );
}

export default App;
