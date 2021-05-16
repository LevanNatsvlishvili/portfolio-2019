import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Url from 'Paths';
import About from 'Modules/About';
import Experience from 'Modules/Experience';

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
