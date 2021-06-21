import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import 'react-pro-sidebar/dist/css/styles.css';

function App(props) {
  return (
    <div className="row" >
      <div className="col-sm-2 p-0">
        <Sidebar history={props.history} />
      </div>
      <div className="col-sm-10">
        <Nav />
        {props.children}
      </div>
    </div>
  );
}

export default App;
