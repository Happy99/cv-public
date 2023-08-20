import React, { Component } from "react";
//import { useState } from "react";

import "./Navbar.css";
import myLogo from "../img/PS-b.png";




class Navbar extends Component {

    state = {
        sirkaOverlay: 0,
    }

    openNav = () => {
        this.setState({ sirkaOverlay: 100 })
    };

    closeNav = () => {
        this.setState({ sirkaOverlay: 0 })
    };

    render() {
        return (
            <div className="navigation" >
                <img className="logo" src={myLogo} alt="" />
                <div className="menu" onClick={this.openNav}>
                    <div className="bar1" />
                    <div className="bar2" />
                    <div className="bar3" />
                </div>
                <div className="email">petr.stastny99@gmail.com</div>

                <div className="overlay" style={{ width: this.state.sirkaOverlay + '%' }}>
                    <div className="overlay__close" onClick={this.closeNav}>&times;</div>
                    <ul className="overlay__menu">
                        <li>
                            <div className="navigation__navlink" activeClassName="navigation__navlink--active" >
                                <small>01</small><span>Home</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Navbar;
