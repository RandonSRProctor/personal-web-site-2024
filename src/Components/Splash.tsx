import { useState } from 'react';

/**
 * An exploratory idea in landing page splash animation
 */
export const Splash = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
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
    </>
  );
};
