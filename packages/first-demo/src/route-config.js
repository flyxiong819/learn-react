import {
  // BrowserRouter, // 路径模式
  HashRouter, // hash模式
  Routes,
  Route,
} from 'react-router-dom';

import Home from './views/home/index';
import Page2 from './views/page2/index';

export default function RouteConfig() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
}
