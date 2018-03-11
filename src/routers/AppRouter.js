
import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';



const AppRouter = () =>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>    
            <Route path="/"  component={Home}  exact={true}/>
            <Route path="/portfolio/:id" component={PortfolioItem} />
            <Route path="/portfolio" component={Portfolio} exact={true} />
            <Route path="/contact" component={Contact}/>
            <Route component = {NotFound} />
      </Switch>
    </div>
     
    </BrowserRouter>
);

export default AppRouter;

