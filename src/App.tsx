// imports of react component
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//imports of custom component
import EmployeeDetails from "./component/Pages/EmployeeDetailsPage";
import Counter from "./component/Pages/CounterPage";
import Navbar from "./component/Layout/Navbar";
import AddUser from "./component/Layout/AddUser";

//imports of css files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={EmployeeDetails} />
          <Route exact path="/count" component={Counter} />
          <Route exact path="/users/add" component={AddUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
