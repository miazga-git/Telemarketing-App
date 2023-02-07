import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListProductsComponent from './Components/ListProductsComponent';
import CreateProductComponent from './Components/CreateProductComponent';
import ListClientsComponent from './Components/ListClientsComponent';
import CreateClientComponent from './Components/CreateClientComponent';
import LoginComponent from './Authentication/LoginComponent';
import RegisterComponent from './Authentication/RegisterComponent';
import CallTimeComponent from './Components/CallTimeComponent';
import ListTransactionsComponent from './Components/ListTransactionsComponent';
import BasketAnalysisComponent from './Components/BasketAnalysisComponent';
import PlannedTransactionsComponent from './Components/PlannedTransactionsComponent';
function App() {

  return (
      <div className="tlo_color_fixed"> 
          
          <Router>

              <HeaderComponent />
              <div className="container ">
                  <Switch>
                      <Route path="/" exact component={LoginComponent} ></Route>
                      <Route path="/register" component={RegisterComponent} ></Route>
                      <Route path="/iteminfo" component={ListProductsComponent} ></Route>
                      <Route path="/add-item" component={CreateProductComponent} ></Route>
                      <Route path="/clientinfo" component={ListClientsComponent} ></Route>
                      <Route path="/add-client" component={CreateClientComponent} ></Route>
                      <Route path="/calltime" component={CallTimeComponent} ></Route>
                      <Route path="/basket-analysis" component={BasketAnalysisComponent}></Route>
                      <Route path="/transactions" component={ListTransactionsComponent} ></Route>
                      <Route path="/planned-transactions" component={PlannedTransactionsComponent}></Route>
                      </Switch>
                  </div>
              <FooterComponent />
              </Router>
          
    </div>
  );
}

export default App;
