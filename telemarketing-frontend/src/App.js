import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListProductsComponent from './Components/ListProductsComponent';
import CreateProductComponent from './Components/CreateProductComponent';
import ListClientsComponent from './Components/ListClientsComponent';
import CreateClientComponent from './Components/CreateClientComponent';

function App() {
  return (
      <div> 
          <Router>

              <HeaderComponent />
                  <div className="container">
                      <Switch>
                      <Route path="/iteminfo" component={ListProductsComponent} ></Route>
                      <Route path="/add-item" component={CreateProductComponent} ></Route>
                      <Route path="/clientinfo" component={ListClientsComponent} ></Route>
                      <Route path="/add-client" component={CreateClientComponent} ></Route>
                      </Switch>
                  </div>
              <FooterComponent />
          </Router>
    </div>
  );
}

export default App;
