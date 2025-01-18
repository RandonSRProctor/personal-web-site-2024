import { SideBar } from './SideBar';
import { Content } from './Content';
import { useState } from 'react';
import { DynamicContent, DynamicContentTitle } from './DynamicContent';

export const Body = () => {
  const [activeContentTitle, setActiveContentTitle] =
    useState<DynamicContentTitle>('Nothing');

  return (
    <div className="h-full w-full flex">
      <SideBar
        activeContentTitle={activeContentTitle}
        setActiveContentTitle={setActiveContentTitle}
      />
      <Content>
        <DynamicContent title={activeContentTitle} />
      </Content>
    </div>
  );
};
