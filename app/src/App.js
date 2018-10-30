import React from "react";
import { Switch, Route } from 'react-router-dom'
import Admin from "./admin/components/Admin";
import Frontend from "./frontend/components/Frontend";

const App = () => (
    <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Frontend} />
    </Switch>
);

export default App;