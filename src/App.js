import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages';
import Education from './components/Education/Education';
import EducationDetail from './pages/EducationDetail/EducationDetail'; // ✅ 注意路径
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);

  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/education" component={Education} /> {/* ✅ 教育列表 */}
          <Route path="/education/:id" component={EducationDetail} /> {/* ✅ 教育详情 */}
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
