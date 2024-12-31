import { Dispatch } from 'react';
import { dynamicContentTitles, DynamicContentTitle } from './DynamicContent';

type SideBarProps = {
  activeContentTitle: DynamicContentTitle;
  setActiveContentTitle: Dispatch<DynamicContentTitle>;
};

export const SideBar = ({
  activeContentTitle,
  setActiveContentTitle,
}: SideBarProps) => {
  return (
    <div>
      <div className="w-40 fixed z-20 bottom-2 left-0 p-2 rounded-r-2xl bg-sky-500 bg-opacity-40 backdrop-blur-md font-bold shadow">
        {dynamicContentTitles.map(title => (
          <_ContentTitle
            title={title as DynamicContentTitle}
            key={title}
            setActiveContent={setActiveContentTitle}
            isSelected={title === activeContentTitle}
          />
        ))}
      </div>
    </div>
  );
};

type _ContentTitleProps = {
  title: DynamicContentTitle;
  subTopics?: string[];
  setActiveContent: Dispatch<DynamicContentTitle>;
  isSelected: boolean;
};

const _ContentTitle = ({
  title,
  subTopics = [],
  setActiveContent,
  isSelected,
}: _ContentTitleProps) => {
  return (
    <div className="pb-2">
      <button
        className={`p-1 w-full rounded-xl ${isSelected ? ' bg-sky-200' : null}`}
        onClick={() => setActiveContent(title)}
      >
        {title}
      </button>
      {subTopics.length > 0 ? (
        <ul className="pl-2">
          {subTopics.map(subTopic => (
            <li key="subTopic">
              <button className="p-1">{subTopic}</button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
