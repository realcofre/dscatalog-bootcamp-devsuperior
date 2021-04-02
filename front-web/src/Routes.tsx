import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin/Index';
import ProductDetails from './pages/Catalog/components/ProductDetails/Index';
import Catalog from './pages/Catalog/Index';
import Home from './pages/Home/Index';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/products" exact>
                <Catalog />
            </Route>

            <Route path="/products/:productId">
                <ProductDetails />
            </Route>

            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;