import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import StreamCreate from "./streamComponents/StreamCreate";
import StreamDelete from "./streamComponents/StreamDelete";
import StreamEdit from "./streamComponents/StreamEdit";
import StreamList from "./streamComponents/StreamList";
import StreamShow from "./streamComponents/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" exact component={StreamCreate} />
            <Route path="/stream/delete/:id" exact component={StreamDelete} />
            <Route path="/stream/edit/:id" exact component={StreamEdit} />
            <Route path="/stream/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
