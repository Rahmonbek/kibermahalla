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
          <Container className={style.conta}>
            <Navbar.Brand className={style.brandnavbar}>
              {/* <img src={xalq} className={style.xalqrasm}></img> */}
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
                  to="/kitoblar"
                >
                  Kitoblar
                </NavLink>
                <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/yangiliklar"
                >
                  Yangiliklar
                </NavLink>
                <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/fotolavhalar"
                >
                  Foto lavhalar
                </NavLink>
                <NavLink
                exact
                activeStyle={{color:'rgb(3, 247, 255)'}}
                  className="navbar"
                  to="/videolavhalar"
                >
                  Video lavhalar
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
