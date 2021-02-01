import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import { routes } from "../../routes";

function App() {
  return (
    <>
      <Router>
        <Route>
          <Switch>
            {routes.map((route, index) => {
              return <Route key={index} path={route.path} exact={route.exact} children={<route.component />} />
            })}
          </Switch>
        </Route>
      </Router>
    </>
  );
}

export default App;
