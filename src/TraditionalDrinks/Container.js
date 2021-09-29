import React from "react";
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
const Container=()=>{
  const [show, setShow] = useState(false);
  const [nameOfIcon, setnameOfIcon] = useState("play")
        const handleClose = () => (setShow(false),setnameOfIcon("play"));
      const handleShow = () => (setShow(true),setnameOfIcon("stop"));
    return(


    <div>
      <section id="latest">
      <div className="container-fluid my-5">
        <h3 className="display-6 text-muted mb-5">Famous Drinks of US</h3>
        <div className="row">
          <div className="col-xl-3 col-sm-6 p-0">
            <div className="latest-items">
              <button className="btn btn-primary p-0 rounded-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#itemDetail1" aria-expanded="false" aria-controls="itemDetail1">
                <img src={require("./Images/greentea.jpg").default} alt="greetea" className="img-fluid"/>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <i className="fas fa-coffee"></i>
                </div>
              </button>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 p-0">
            <div className="latest-items">
              <button className="btn btn-primary p-0 rounded-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#itemDetail2" aria-expanded="false" aria-controls="itemDetail1">
                <img src={require("./Images/rosewine.png").default} alt="rosewine" className="img-fluid"/>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <i className="fas fa-wine-glass-alt"></i>
                </div>
              </button>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 p-0">
            <div className="latest-items">
              <button className="btn btn-primary p-0 rounded-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#itemDetail3" aria-expanded="false" aria-controls="itemDetail1">
                <img src={require("./Images/lemonsyrup.jpg").default} alt="limonsyrup" className="img-fluid"/>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <i className="fas fa-wine-bottle"></i>
                </div>
              </button>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 p-0">
            <div className="latest-items">
              <button className="btn btn-primary p-0 rounded-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#itemDetail4" aria-expanded="false" aria-controls="itemDetail1">
                <img src={require("./Images/ayran.jpg").default} alt="atlama" className="img-fluid"/>
                <div className="overlay d-flex align-items-center justify-content-center">
                  <i className="fas fa-glass-martini-alt"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="collapse" id="itemDetail1">
            <div className="container-fluid mt-5 p-0">
              <div className="row shadow p-0">
                <div className="col-md-6 col-xl-3 p-0">
                  <button type="button" className="btn-close" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#itemDetail1" aria-expanded="false" aria-controls="itemDetail1"></button>
                  <dl className="row ps-5">
                    <dt className="col-12"><span className="text-danger lead">Our Teas</span></dt>
                    <dt className="col-12">1.Black Teas</dt>
                    <dt className="col-12">2.Green Teas</dt>
                    <dt className="col-12">3.Herbal Teas</dt>
                  </dl>
                </div>
                <div className="col-md-6 col-xl-3  p-0">
                  <img src={require("./Images/blacktea.jpg").default} alt="blacktea" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-xl-3  p-0">
                  <img src={require("./Images/greentea.jpg").default} alt="greentea" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-xl-3  p-0">
                  <img src={require("./Images/herbaltea.jpg").default} alt="herbaltea" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse" id="itemDetail2">
            <div className="container-fluid p-0 mt-5">
              <div className="row shadow p-0">
                <div className="col-md-6 col-xl-3 p-0">
                  <button type="button" className="btn-close" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#itemDetail2" aria-expanded="false" aria-controls="itemDetail1"></button>
                  <dl className="row ps-5">
                    <dt className="col-12"><span className="text-danger lead">Our wines</span></dt>
                    <dt className="col-12">1.White wine</dt>
                    <dt className="col-12">2.Red wine</dt>
                    <dt className="col-12">3.Pink wine</dt>
              
                  </dl>
                </div>
                <div className="col-md-6 col-xl-3  p-0">
                  <img src={require("./Images/whitewine.jpg").default} alt="whitewine" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-xl-3  p-0">
                  <img src={require("./Images/redwine.jpg").default} alt="redwine" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-xl-3  p-0">
                  <img src={require("./Images/rosewine.png").default} alt="rosewine" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse" id="itemDetail3">
            <div className="container-fluid p-0 mt-5">
              <div className="row shadow p-0">
                <div className="col-md-6 col-xl-3 p-0">
                  <button type="button" className="btn-close" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#itemDetail3" aria-expanded="false" aria-controls="itemDetail1"></button>
                  <dl className="row ps-5">
                    <dt className="col-12"><span className="text-danger lead">Our Syrups</span></dt>
                    <dt className="col-12">1.Pomegranate syrup</dt>
                    <dt className="col-12">2.Lemon syrup</dt>
                    <dt className="col-12">3.Fruit syrup</dt>
                  </dl>
                </div>
                <div className="col-md-6 col-xl-3 p-0">
                  <img src={require("./Images/granatesyrup.jpg").default} alt="granatesyrup" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-xl-3 p-0">
                  <img src={require("./Images/lemonsyrup.jpg").default} alt="limonsyrup" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-xl-3 p-0">
                  <img src={require("./Images/fruitsyrup.jpg").default} alt="fruitsyrup" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse" id="itemDetail4">
            <div className="container-fluid p-0 mt-5">
              <div className="row shadow p-0">
                <div className="col-md-6 col-xl-3 p-0">
                  <button type="button" className="btn-close" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#itemDetail4" aria-expanded="false" aria-controls="itemDetail1"></button>
                  <dl className="row ps-5">
                    <dt className="col-12"><span className="text-danger lead">Our Milk products</span></dt>
                    <dt className="col-12">1.Dovga</dt>
                    <dt className="col-12">2.Atlama</dt>
                    <dt className="col-12">3.Ayran</dt>
                  </dl>
                </div>
                <div className="col-md-6 col-xl-3 p-0">
                  <img src={require("./Images/dovga.jpg").default} alt="dovga" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-xl-3 p-0">
                  <img src={require("./Images/atlama.jpg").default} alt="atlama" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-xl-3 p-0">
                  <img src={require("./Images/ayran.jpg").default} alt="ayran1" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="dark-bg py-5" id="hero">
      <div className="container">
        <div className="d-flex flex-column justify-content-center h-100 text-light">
          <h3 className="display-4">Traditional drink <br/> of<span className="text-danger"> Azerbaijan</span></h3>
          <p className="lead">Azerbaijani people are in love with tea.<span className="text-danger"> Mornings start with tea and days end with tea here.</span></p>
          <br></br>
          <div>

                <button type="button" onClick={handleShow} class="btn btn-outline-danger rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Watch More <i class={`fas fa-${nameOfIcon}-circle`}></i>
                </button>
                <Modal id="modal" show={show} onHide={handleClose}>
                  <Modal.Header className="bg-light" closeButton>
                    <Modal.Title>Traditional drinks of Azerbaijan</Modal.Title>
                 </Modal.Header>
                  <Modal.Body className="p-0 bg-dark"> <iframe width="100%" height="315" margin="0" src="https://www.youtube.com/embed/b7bjNuehnk4" frameborder="0" allowfullscreen></iframe></Modal.Body>
                </Modal>
              </div>
            </div>
          </div>



    </section>
    </div>

    )
}
export default Container