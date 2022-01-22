import React, { Component } from 'react'
import Header from './Header'
import rasm from "../img/bosh1.png"
import style from "../css/Dashboard.module.css";
import { Col, Container, Row } from 'react-bootstrap';
import back1 from '../videos/a.mp4'
import back2 from '../videos/b.mp4'
import Dashnews from './Dashnews';
export default class Dashboard extends Component {
  state={
    muted2:true,
    muted3:true,
  }  
  muted2=()=>{

    this.setState({
      muted2:!this.state.muted2
    })
  }
  muted3=()=>{

    this.setState({
      muted3:!this.state.muted3
    })
  }
  render() {
    
        return (
            <div>
                <Header/>
         <video className={style.back1} loop src={back1} autoPlay muted></video>
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
    <div className={style.logo} style={{top:'-50px'}}><a href="#"><i className="fa fa-youtube"></i></a></div>
    <div className={style.logo}><a href="#"><i className="fa fa-facebook"></i></a></div>
    <div className={style.logo}  style={{top:'50px', left:'-100px'}}><a href="#"><i className="fa fa-instagram"></i></a></div>
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
    <div className={style.logo} style={{top:'-50px', left:'100px'}}>
      <a href="#"><i className="fa fa-phone"></i></a>
      </div>
    <div className={style.logo}><a href="#"><i className="fa fa-telegram"></i></a></div>
    <div className={style.logo}  style={{top:'50px', left:'0px'}}><a href="#"><i className="fa fa-envelope-open"></i></a></div>
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
        <video className={style.back2} src={back2} autoPlay loop muted={this.state.muted2}></video>
       
<div className={style.blue}>
  <div className={style.logo1} onClick={this.muted2}>{this.state.muted2?<i className="fa fa-volume-off"></i>:<i className="fa fa-volume-up"></i>}</div>
</div>
<Dashnews/>
<video className={style.back3} src={back2} autoPlay loop muted={this.state.muted3}></video>
       
       <div className={style.blue3}>
         <div className={style.logo1} onClick={this.muted3}>{this.state.muted3?<i className="fa fa-volume-off"></i>:<i className="fa fa-volume-up"></i>}</div>
       </div>
       
            </div>
        )
    }
}
