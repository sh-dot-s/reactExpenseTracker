// Higher Order Components(HOC): A Component that renders other components Usage:
// Render Hijacking, Props Manipulation, Code Resual, Abstract State

import React, {Component} from 'react';
import ReactDOM from "react-dom";

const Header = (props) => (
    <div>
        <h1>Sample Header</h1>
        <p>This is data from a sample prop: {props.sample}</p>
    </div>
);

const withWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <h3>This is warning call</h3>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    );
};

const authenticateForSensitiveContent = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <h4>This is highly sensitive info displayed only to authenticated users, please do not share this info</h4>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const HeaderWithWarning = authenticateForSensitiveContent(withWarning(Header));

ReactDOM.render(<HeaderWithWarning isAuthenticated={true} sample="Lets get this over with"/>, document.getElementById('app'));