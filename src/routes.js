import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import addEmployee from "./pages/addEmployee";
import viewEmployee from "./pages/viewEmployee";
import editEmployee from "./pages/editEmployee";
import App from "./components/App";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <App {...props}>
                    <Switch>
                        <Route path="/" exact component={addEmployee} />
                        <Route path="/addEmployee" component={addEmployee} />
                        <Route path="/viewEmployee" component={viewEmployee} />
                        <Route path="/editEmployee/:id" component={editEmployee} />
                    </Switch>
                </App>
            )} />
        </BrowserRouter>
    )
}

export default Routes;