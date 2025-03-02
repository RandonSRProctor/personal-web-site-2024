import { RAD } from './Components/RAD/RAD';
import { Route, Routes } from 'react-router';
import { Career } from './Components/Career/Career';
import { Apps } from './Components/Apps/Apps';
import { Blog } from './Components/Blog/Blog';
import { JsonGUI } from './Components/Apps/JsonGUI/JsonGUI';
import { AppSelector } from './Components/Apps/AppSelector/AppSelector';
import { Root } from './Components/Root/Root';

export const Routing = () => {
  return (
    // TODO: Set up default!
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="Apps" element={<Apps />}>
          <Route index element={<AppSelector />} />
          <Route path="JsonGUI" element={<JsonGUI />} />
        </Route>
        <Route path="Blog" element={<Blog />} />
        <Route path="Career" element={<Career />} />
        <Route path="RAD" element={<RAD />} />
      </Route>
    </Routes>
  );
};
