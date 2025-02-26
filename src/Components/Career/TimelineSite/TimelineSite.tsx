import { useState } from 'react';
import { Point } from './Point';
import { timelineData } from './timelineData';
const reverseTimelineData = [...timelineData].reverse();

export const TimelineSite = () => {
  const [blurb, setBlurb] = useState('Select a Milestone for more info!');

  return (
    <div className="flex">
      <Timeline />
      <Info header="Header" blurb={blurb} />
    </div>
  );

  function Info({ header, blurb }: { header: string; blurb: string }) {
    return (
      <div className="w-1/2 text-white p-2">
        <div className="">
          <div className="bg-slate-500 rounded p-4">
            <h1 className="pb-2 text-2xl">{header}</h1>
            <p>{blurb}</p>
          </div>
        </div>
      </div>
    );
  }

  function Timeline() {
    return (
      <div className="w-1/2">
        <div className=" border-l-8 border-l-yellow-500">
          <div className="flex flex-col items-start">
            {reverseTimelineData.map(({ title, year, text }) => (
              <Point
                title={title}
                year={year}
                text={text}
                setBlurb={setBlurb}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};
