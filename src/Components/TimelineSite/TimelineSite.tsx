import { Point } from './Point';
import { timelineData } from './timelineData';
const reverseTimelineData = [...timelineData].reverse();

export const TimelineSite = () => {
  return (
    <div className="nothing">
      <div className="h-full w-full -z-10 flex fixed justify-center bg-blue-950">
        <div className="bg-yellow-500 h-screen w-2"></div>
      </div>
      <div className="w-full">
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
