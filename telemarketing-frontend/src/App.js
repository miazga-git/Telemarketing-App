import React, { useState } from 'react';
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
import { AuthContext } from './auth';
import PrivateRoute from './PrivateRoute';
function App() {

    const existingToken = localStorage.getItem("token")
    const [authToken, setAuthToken] = useState(existingToken)

    const setToken = (data) => {
        if (data === "")
            localStorage.removeItem("token")
        else
            localStorage.setItem("token", data)
        setAuthToken(data)
    }

  return (
      <div className="tlo_color_fixed"> 
          
          <Router>

              <HeaderComponent />
              <div className="container ">
                  <Switch>
                  <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
                  <Route path="/" exact component={LoginComponent} ></Route> 
                      <Route path="/register" component={RegisterComponent} ></Route>
                      <PrivateRoute extact path="/iteminfo" component={ListProductsComponent} />
                      <PrivateRoute extact path="/add-item" component={CreateProductComponent} />
                      <PrivateRoute extact path="/clientinfo" component={ListClientsComponent} />
                      <PrivateRoute extact path="/add-client" component={CreateClientComponent} />
                      <PrivateRoute extact path="/calltime" component={CallTimeComponent} />
                      <PrivateRoute extact path="/basket-analysis" component={BasketAnalysisComponent}/>
                      <PrivateRoute extact path="/transactions" component={ListTransactionsComponent} />
                      <PrivateRoute extact path="/planned-transactions" component={PlannedTransactionsComponent}/>
                  </AuthContext.Provider>
                      </Switch>
                  </div>
              <FooterComponent />
              </Router>
          
    </div>
  );
}

export default App;
