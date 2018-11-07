import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "../index.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";
import LandingPage from "./Landing";
import CreateSitePage from "./SitePages/CreateSitePage";
import EditSitePageContainer from "../containers/SitePages/EditSitePageContainer";
import configureStore from "../store/configureStore";
import SitePageListContainer from "../containers/SitePages/SitePageListContainer";

const store = configureStore();

const Admin = () => (
    <Provider store={store}>
        <div className="admin">
            <Header />
            <Sidebar />
            <main>
                <Switch>
                    <Route path="/admin" exact component={LandingPage} />
                    <Route path="/admin/pages" exact component={SitePageListContainer} />
                    <Route path="/admin/pages/new" exact component={CreateSitePage} />
                    <Route path="/admin/pages/:id" exact component={EditSitePageContainer} />
                </Switch>
            </main>
        </div>
    </Provider>
);

export default Admin;