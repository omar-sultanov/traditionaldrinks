import React from "react";
import { Link } from "react-router-dom";

const Jumbotron=()=>{
    return(

    <div>
          <div className="jumbotron">
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require("./Images/cemiyyet.jpg").default}  className="d-block w-100 " alt="historyAzerbaijan"/>
                <div className="carousel-caption w-75 h-75 mx-0 d-flex justify-content-between" >
                  <div className="text-start">
                     <h2 className="display-5 fw-bold">Azerbaijan - <br/>The Land of Fire</h2>
                     <Link className="btn btn-dark d-none d-md-block px-5 py-2 my-5 rounded-0 text-decoration-none " to="/About">Learn more</Link>
                       
                  </div>
                  <p className="w-50 text-end d-none d-md-block">Azerbaijan, officially the Republic of Azerbaijan is an important and the largest country in the Caucasus region of Eurasia. Whilst the capital, Baku, has rapidly transformed itself into a highly developed modern city, the surrounding villages still remain untouched and archaic.</p>
                </div>
              </div>
              <div className="carousel-item ">
                <img src={require("./Images/banner_azerbaijan.jpg").default} className="d-block w-100" alt="historyCulture"/>
                <div className="carousel-caption w-75 h-75 mx-0 d-flex flex-row-reverse justify-content-between ">
                <div className="text-end">
                  <h2 className="display-5 fw-bold">Traditional <span className="text-danger">Tea</span>  <br/>Culture</h2>
                  <Link className="btn btn-success d-none d-md-block px-5 py-2 my-5 rounded-0 text-decoration-none " to="/About">Learn more</Link>
                </div>
                <p className="w-50 text-start d-none d-md-block ">One of the striking parts of Azerbaijan culture is the tea drinking rituals. Tea is almost sacred. The brightly coloured drink gets poured into a pear-shaped glass called an armuda, served without milk. A cube of sugar accompanies, and then locals take a bite before sipping the tea. The reason behind this quirky style dates back to medieval times when paranoid rulers were afraid of assassination by poison. Apparently, the sugar reacts to the toxin when dipped into the tea.</p>
                </div>
              </div>
             

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
    </div>

    )
}
export default Jumbotron