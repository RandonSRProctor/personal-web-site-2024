import { SideBar } from './SideBar';
import { Content } from './Content';
import { TimelineSite } from '../TimelineSite/TimelineSite';
import { useState } from 'react';

export const DynamicContent = {
  'Timeline Site': <TimelineSite />,
  Nothing: null,
} as const;

export type DynamicContentTitle = keyof typeof DynamicContent;
const dynamicContentTitles = Object.keys(DynamicContent);

export const Body = () => {
  const [activeContentTitle, setActiveContentTitle] =
    useState<DynamicContentTitle>('Nothing');

  return (
    <div className="h-full w-full flex">
      <SideBar
        dynamicContentTitles={dynamicContentTitles as DynamicContentTitle[]}
        activeContentTitle={activeContentTitle}
        setActiveContentTitle={setActiveContentTitle}
      />
      <Content>{DynamicContent[activeContentTitle]}</Content>
    </div>
  );
};
