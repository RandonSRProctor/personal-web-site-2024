import { TimelineSite } from '../TimelineSite/TimelineSite';
import { Body } from './Body';
import { Content } from './Content';
import { Header } from './Header';
import { SideBar } from './SideBar';

export const Home = () => {
  return (
    <>
      <Header />
      <Body>
        <SideBar />
        <Content>
          <TimelineSite />
        </Content>
      </Body>
    </>
  );
};
