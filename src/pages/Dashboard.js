import React, { Component } from 'react'
import Header from './Header'
import rasm from "../img/bosh1.png"
import style from "../css/Dashboard.module.css";
import { Col, Container, Row } from 'react-bootstrap';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={style.head}>
         
            <Row>
              <Col
                lg="4"
                md="12"
                sm="12"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "85vh",
                }}
                className={style.head1}
              >

<div className={style.logoLeft}>
    <div className={style.logo} style={{top:'-50px'}}><i className="fa fa-youtube"></i></div>
    <div className={style.logo}><i className="fa fa-facebook"></i></div>
    <div className={style.logo}  style={{top:'50px', left:'-100px'}}><i className="fa fa-instagram"></i></div>
</div>


                {/* <h1>Kiber</h1> */}
                {/* <p>
                  O'qishda har bir narsada bo'lgani kabi, biz harakatsizlikdan
                  azoblanamiz va hayot uchun emas, balki maktab uchun o'qish.
                </p>
                <a href="tel: +998930820372">Biz bilan bog'lanish</a> */}
              </Col>
              <Col lg="4" md="12" sm="12"
               style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}>
                <br />
                <br />

                <div className={style.rasm}>
                  <div className={style.rasm1}>
                    <div className={style.rasm2}>
                      <img src={rasm} alt="..." />
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="12"
                sm="12"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems:'flex-end',
                  height: "85vh",
                }}
                className={style.head1}
              >
                   <div className={style.logoRight}>
    <div className={style.logo} style={{top:'-50px', left:'100px'}}><i className="fa fa-phone"></i></div>
    <div className={style.logo}><i className="fa fa-telegram"></i></div>
    <div className={style.logo}  style={{top:'50px', left:'0px'}}><i className="fa fa-mail"></i></div>
</div>
                {/* <h1>Mahalla</h1> */}
                {/* <p>
                  O'qishda har bir narsada bo'lgani kabi, biz harakatsizlikdan
                  azoblanamiz va hayot uchun emas, balki maktab uchun o'qish.
                </p>
                <a href="tel: +998930820372">Biz bilan bog'lanish</a> */}
              </Col>
            </Row>
          
        </div>
       

            </div>
        )
    }
}
