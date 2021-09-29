
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Products from "./Products/Products";
import About from "./About/About"

const Navbar=(props)=>{


    return(
        
    <div>
        <div className="BrandName">
            <div className="d-flex align-items-center justify-content-center">
              <h3 className="my-0">Traditional<span>Drinks</span></h3>
            </div>
            <div id="icons" className="d-flex">
                <a href="#/dribble"> <i className="fab fa-dribbble"></i></a>
                <a href="#/facebook"> <i className="fab fa-facebook-f"></i></a>
                <a href="#/instagram"><i className="fab fa-instagram"></i></a>
                <a href="#/twitter"> <i className="fab fa-twitter"></i></a>
            </div>
        </div>
        <nav class="py-0 navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid bg-dark">
    <button class="navbar-toggler p-2 m-3 bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/Product">Product</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link" to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <Switch>
            <Route  path="/Contact" component={Contact}/>
            <Route  path="/Product" component={Products}/>
            <Route  path="/About" component={About}/>
            <Route  path="/" component={Home}/>
            
       </Switch>
      
    </div>

    )
}
export default Navbar