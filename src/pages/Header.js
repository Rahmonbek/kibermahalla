import React, { Component } from "react";
import xalq from "../img/xalq.png";
import style from "../css/Head.module.css";

import { Container, Nav, Navbar,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className={style.headnavbar}>
        <Navbar
          collapseOnSelect
          expand="lg"
         
          className={style.navabrs}
        >
          <div className={style.conta}>
            <Navbar.Brand className={style.brandnavbar}>
              {/* <img src={xalq} className={style.xalqrasm}></img> */}
              <h4>"Mahallarda etnosportni rivojlantirish"<br/> elektron platformasi</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" className={style.navbarlar}>
                <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/"
                >
                  Bosh sahifa
                </NavLink>
                <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/tadbirlar"
                >
                  Tadbirlar
                </NavLink>
                <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/tadbirlar"
                >
                  Yangiliklar
                </NavLink>
                <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/tadbirlar"
                >
                  Tanlovlar
                </NavLink>
                <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/reyting"
                >
                  Statistika
                </NavLink>
                <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/fotolavhalar"
                >
                  Sport va sportchilar
                </NavLink>
                {/* <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/fotolavhalar"
                >
                  Vakantsiyalar
                </NavLink> */}
                {/* <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/videolavhalar"
                >
                  Xarita
                </NavLink> */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
