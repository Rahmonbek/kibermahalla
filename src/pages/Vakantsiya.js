
import React, { Component } from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import style from '../css/Vakantsiya.module.css'
export default class Vakantsiya extends Component {
    state={
        modal:false
    }
    openModal=()=>{
        this.setState({
            modal:true
        })
    }
    closeModal=()=>{
        this.setState({
            modal:false
        })
    }
    render() {
        return (
            <div>
                  <h1 className={style.reyh1}>Vakantsiyalar</h1>
                  <Modal show={this.state.modal} onHide={this.closeModal}>
        <Modal.Header  className={style.modal} closeButton={false}>
          <Modal.Title>Vakantsiya uchun rezyume yuborish</Modal.Title>
        </Modal.Header>
        <Modal.Body  className={style.modal}>
            <form>
<p>Ism familiya sharifni yozing</p>
<input className={style.in} type="text" name="fio" id="fio" required placeholder="FIO"/>
<p>Telefon raqamizni yozing</p>
<input  className={style.in} type="text" name="tel" id="tel" required placeholder="+998 99 999 99 99"/>
<p>Rezyume tanlang</p>
<input type="file" name="file" id="file" />
<p>Qo'shimcha ma'lumot yozing</p>
<textarea style={{height:'150px'}}  className={style.in} name="comment" placeholder="Qo'shimcha ma'lumot..."></textarea>
</form>

        </Modal.Body>
        <Modal.Footer  className={style.modal}>
          <Button variant="secondary" onClick={this.closeModal}>
            Bekor qilish
          </Button>
          <Button variant="primary" onClick={this.closeModal}>
            Yuborish
          </Button>
        </Modal.Footer>
      </Modal>

                  <Container>
                      <Row>
                      <Col  className={style.cad} lg={4} md={6} sm={12}>
                         <div>
                         <h3>
                             MFY binosiga qorovul kerak
                         </h3>
                         <h5>Buxoro viloyati Qorovulbozor tumani Imom Buxoriy MFY</h5>
                         <p><b>Talablar:</b> slanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdi</p>
                          <button className={style.hamma} onClick={this.openModal}>Murojaat yuborish</button>
                          </div>
                          </Col>
                          <Col  className={style.cad} lg={4} md={6} sm={12}>
                         <div>
                         <h3>
                             MFY binosiga qorovul kerak
                         </h3>
                         <h5>Buxoro viloyati Qorovulbozor tumani Imom Buxoriy MFY</h5>
                         <p><b>Talablar:</b> slanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdi</p>
                          <button className={style.hamma} onClick={this.openModal}>Murojaat yuborish</button>
                          </div>
                          </Col>
                          <Col  className={style.cad} lg={4} md={6} sm={12}>
                         <div>
                         <h3>
                             MFY binosiga qorovul kerak
                         </h3>
                         <h5>Buxoro viloyati Qorovulbozor tumani Imom Buxoriy MFY</h5>
                         <p><b>Talablar:</b> slanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdislanvnslsn snsknsdskn sdn sdn sn s son dsin snsoisni dsodnso ndsdi</p>
                          <button className={style.hamma} onClick={this.openModal}>Murojaat yuborish</button>
                          </div>
                          </Col>
                          
                      </Row>




                  </Container>
            </div>
        )
    }
}
