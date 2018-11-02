import React from "react";
import { Switch, Route } from "react-router-dom";
import "../index.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PageList from "./Pages/PageList/PageList";
import LandingPage from "./Landing";
import CreatePage from "./Pages/CreatePage";

const Admin = () => (
    <div className="admin">
        <Header />
        <Sidebar />
        <main>
        <Switch>
            <Route path="/admin" exact component={LandingPage} />
            <Route path="/admin/pages" exact component={PageList} />
            <Route path="/admin/pages/new" exact component={CreatePage} />
        </Switch>
        </main>
    </div>
);

export default Admin;