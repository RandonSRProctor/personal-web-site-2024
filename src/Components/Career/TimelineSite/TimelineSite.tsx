import { Point } from './Point';
import { timelineData } from './timelineData';
const reverseTimelineData = [...timelineData].reverse();

export const TimelineSite = () => {
  return (
    <div className="">
      <div className="h-full w-full flex fixed justify-center">
        <div className="bg-yellow-500 h-screen w-2"></div>
      </div>
      <div className="relative z-10 w-full">
        <div className="flex flex-col items-center">
          {reverseTimelineData.map(({ title, year, text }, index) => (
            <Point
              title={title}
              year={year}
              text={text}
              side={index % 2 === 1 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
