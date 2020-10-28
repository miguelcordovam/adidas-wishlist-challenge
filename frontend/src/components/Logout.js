import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions';

class Logout extends React.Component {

    handleSignOut = () => {
        this.props.signOut();
    }

    render () {
        return (
        this.isSignedIn ?
            <span>Hola</span> :
            <span className="logout" onClick={() => this.handleSignOut()}>Logout</span>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {signOut})(Logout);