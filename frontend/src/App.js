import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import WishListPage from './pages/WishListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import './App.css';

class App extends React.Component {

    render () {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <div id="page-body">
                        <Switch>
                            <Route path ="/products" component={ProductsPage} exact />
                            <Route path ="/wishlist" component={WishListPage} exact />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </Router>

        );
    }
}

export default App;