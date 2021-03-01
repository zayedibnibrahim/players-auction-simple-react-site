import React from 'react';
import logo from '../../logo.png'
import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <div className="container-fluid header">
            <div className="row d-flex">
                <div className="col-sm-4">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="col-sm-8 header-title">
                    <h2>Future Station Club</h2>
                    <p>Pro Football Club 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Header;