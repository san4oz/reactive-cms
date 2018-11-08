import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "../index.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";
import LandingPage from "./Landing";
import CreateSitePage from "../containers/SitePages/CreateSitePageContainer";
import EditSitePage from "../containers/SitePages/EditSitePageContainer";
import SitePages from "../containers/SitePages/SitePagesContainer";
import configureStore from "../store/configureStore";

const store = configureStore();

const Admin = () => (
    <Provider store={store}>
        <div className="admin">
            <Header />
            <Sidebar />
            <main>
                <Switch>
                    <Route path="/admin" exact component={LandingPage} />
                    <Route path="/admin/pages" exact component={SitePages} />
                    <Route path="/admin/pages/new" exact component={CreateSitePage} />
                    <Route path="/admin/pages/:id" exact component={EditSitePage} />
                </Switch>
            </main>
        </div>
    </Provider>
);

export default Admin;