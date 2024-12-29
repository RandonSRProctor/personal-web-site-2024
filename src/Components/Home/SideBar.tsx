import { Dispatch } from 'react';
import { DynamicContentTitle } from './Body';

type SideBarProps = {
  dynamicContentTitles: DynamicContentTitle[];
  activeContentTitle: DynamicContentTitle;
  setActiveContentTitle: Dispatch<DynamicContentTitle>;
};

export const SideBar = ({
  dynamicContentTitles,
  activeContentTitle,
  setActiveContentTitle,
}: SideBarProps) => {
  return (
    <div className="w-80 p-2 bg-sky-300 shadow rounded-2xl">
      {dynamicContentTitles.map(title => (
        <_Topic
          title={title}
          key={title}
          setActiveContent={setActiveContentTitle}
          isSelected={title === activeContentTitle}
        />
      ))}
    </div>
  );
};

type _Topic_Props = {
  title: DynamicContentTitle;
  subTopics?: string[];
  setActiveContent: Dispatch<DynamicContentTitle>;
  isSelected: boolean;
};

const _Topic = ({
  title,
  subTopics = [],
  setActiveContent,
  isSelected,
}: _Topic_Props) => {
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
