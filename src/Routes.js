import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Url from 'Paths';
import About from 'Modules/About';
import Experience from 'Modules/Experience';
import Projects from 'Modules/Projects';
import Education from 'Modules/Education';
import Skills from 'Modules/Skills';
import Services from 'Modules/Services';

const Redirection = () => {
  return <Redirect to={Url.ABOUT} />
}

const routes = [
  {
    path: Url.BASE,
    exact: true,
    component: Redirection,
  },
  {
    path: Url.ABOUT,
    exact: true,
    component: About,
  },
  {
    path: Url.EXPERIENCE,
    exact: true,
    component: Experience,
  },
  {
    path: Url.PROJECTS,
    exact: true,
    component: Projects,
  },
  {
    path: Url.EDUCATION,
    exact: true,
    component: Education,
  },
  {
    path: Url.SKILLS,
    exact: true,
    component: Skills,
  },
  {
    path: Url.SERVICES,
    exact: true,
    component: Services,
  },
];

export const RenderRoutes = (switchProps = {}) => {
  return (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
            redirect={route.redirect}
          />
        )
      })}
    </Switch>
  );
};
