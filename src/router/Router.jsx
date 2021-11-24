import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page404 } from "../Page404";
// import { Page1 } from "../Page1";
// import { Page1DetailA } from "../Page1DetailA";
// import { Page1DetailB } from "../Page1DetailB";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  // 上から、urlを一致するか検索する。
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
            {/* {console.log(url)}
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`} render={() => <Page1DetailA />} />
            <Route path={`${url}/detailB`} render={() => <Page1DetailB />} /> */}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
                //   render={() => ({route.children})}
                // />
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
