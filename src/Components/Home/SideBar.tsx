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
    <div className="w-80 p-2 bg-sky-300 shadow rounded-2xl">
      {dynamicContentTitles.map(title => (
        <_ContentTitle
          title={title as DynamicContentTitle}
          key={title}
          setActiveContent={setActiveContentTitle}
          isSelected={title === activeContentTitle}
        />
      ))}
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
        className={`p-1 border border-white w-full rounded-xl ${
          isSelected ? ' bg-sky-200' : null
        }`}
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
