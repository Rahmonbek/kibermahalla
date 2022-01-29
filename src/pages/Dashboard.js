import React, { Component } from 'react'
import Header from './Header'
import rasm from "../img/bosh1.png"
import style from "../css/Dashboard.module.css";
import { Col, Container, Row } from 'react-bootstrap';
import back1 from '../videos/a.mp4'
import back2 from '../videos/b.mp4'
import back3 from '../videos/c.mp4'
import Dashnews from './Dashnews';
import Dashreyting from './Dashreyting';
import Vakantsiya from './Vakantsiya';
import Xarita from './Xarita';
import Loader from '../Loader'
import Footer from './Footer';
export default class Dashboard extends Component {
  state={
    muted2:true,
    muted3:true,
    loader:true,
  }  
  componentDidMount(){
    setTimeout(()=>{
this.setState({
  loader:false
})
    },3000)
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
              {this.state.loader?<Loader/>:
              <>
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
          <div className={style.logo} style={{top:'-50px'}}><a target="_blank" href="https://www.youtube.com/channel/UCoczFw9HeseR80AAbIllB3w"><i className="fa fa-youtube"></i></a></div>
          <div className={style.logo}><a target="_blank" href="https://www.facebook.com/Etnosport-103183432278003/?ref=page_internal"><i className="fa fa-facebook"></i></a></div>
          <div className={style.logo}  style={{top:'50px', left:'-100px'}}><a target="_blank" href="https://www.instagram.com/etnosport2/"><i className="fa fa-instagram"></i></a></div>
      </div>
      
      
                      {/* <h1>Kiber</h1> */}
                      {/* <p>
                        O'qishda har bir narsada bo'lgani kabi, biz harakatsizlikdan
                        azoblanamiz va hayot uchun emas, balki maktab uchun o'qish.
                      </p>
                      <a target="_blank" href="tel: +998930820372">Biz bilan bog'lanish</a> */}
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
            <a target="_blank" href="#"><i className="fa fa-phone"></i></a>
            </div>
          <div className={style.logo}><a target="_blank" href="https://t.me/Etnosport1"><i className="fa fa-telegram"></i></a></div>
          <div className={style.logo}  style={{top:'50px', left:'0px'}}><a target="_blank" href="mailto: etnosport5@gmail.com"><i className="fa fa-envelope-open"></i></a></div>
      </div>
                     
                    </Col>
                  </Row>
                
              </div>
              <video className={style.back2} src={back2} autoPlay loop muted={this.state.muted2}></video>
             
      <div className={style.blue}>
        <div className={style.logo1} onClick={this.muted2}>{this.state.muted2?<i className="fa fa-volume-off"></i>:<i className="fa fa-volume-up"></i>}</div>
      </div>
      <Dashnews/>
      <video className={style.back3} src={back3} autoPlay loop muted={this.state.muted3}></video>
             
             <div className={style.blue3}>
               <div className={style.logo1} onClick={this.muted3}>{this.state.muted3?<i className="fa fa-volume-off"></i>:<i className="fa fa-volume-up"></i>}</div>
             </div>
             <Dashreyting/>
             <Vakantsiya/>
             <Xarita/>
             <Footer/>
             </>
      }
                           </div>
        )
    }
}
