import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

// Page Containers
import CreateBookPage from "../pages/CreateBookPage";
import DetailBookPage from "../pages/DetailBookPage";
import EditBookPage from "../pages/EditBookPage";
import HelpPage from "../pages/HelpPage";
import LibraryHomePage from "../pages/LibraryHomePage";
import PageNotFound from "../pages/PageNotFound";
import StatisticsPage from "../pages/StatisticsPage";
import ViewBookshelfPage from "../pages/ViewBookshelfPage";

// Components
import Header from "../components/Header";

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={LibraryHomePage} />
            <Route path="/books/create" component={CreateBookPage} />
            <Route
              path="/books/view/:id"
              render={(props) => <DetailBookPage {...props} />}
            />
            <Route path="/books/edit/:id" component={EditBookPage} />
            <Route path="/library" component={ViewBookshelfPage} />
            <Route path="/statistics" component={StatisticsPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
