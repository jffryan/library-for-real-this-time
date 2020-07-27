import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../config/history";

// Page Containers
import CreateBookPage from "../pages/CreateBookPage";
import DetailBookPage from "../pages/DetailBookPage";
import EditBookPage from "../pages/EditBookPage";
import HelpPage from "../pages/HelpPage";
import LandingPage from "../pages/LandingPage";
import PageNotFound from "../pages/PageNotFound";
import StatisticsPage from "../pages/StatisticsPage";
import ViewBookshelfPage from "../pages/ViewBookshelfPage";

// Components
import Header from "../components/Header";

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/books/create" component={CreateBookPage} />
              <Route
                path="/books/view/:id"
                render={(props) => <DetailBookPage {...props} />}
              />
              <Route exact path="/books/edit/:id" component={EditBookPage} />
              <Route exact path="/library" component={ViewBookshelfPage} />
              <Route exact path="/statistics" component={StatisticsPage} />
              <Route exact path="/help" component={HelpPage} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default AppRouter;
