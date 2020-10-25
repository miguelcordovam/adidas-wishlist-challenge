import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import WishListPage from './pages/WishListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import './App.css';
import Login from './components/login/Login';
import OAuth2RedirectHandler from './components/login/OAuth2RedirectHandler';
import PrivateRoute from './common/PrivateRoute';
import { connect } from 'react-redux';

class App extends React.Component {

    render () {
        return (
            <Router>
                <div className="App">
                    {this.props.isSignedIn?<NavBar />: null}
                    <div id="page-body">
                        <Switch>
                            <PrivateRoute path ="/products" component={ProductsPage} authenticated={this.props.isSignedIn} exact />
                            <PrivateRoute path ="/wishlist" component={WishListPage} authenticated={this.props.isSignedIn} exact />
                            <Route path="/login"
                                    render={(props) => <Login authenticated={this.props.isSignedIn} />}></Route>
                            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </Router>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(
    mapStateToProps, 
    {})
    (App);