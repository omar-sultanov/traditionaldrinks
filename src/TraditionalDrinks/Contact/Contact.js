import React from "react";

const Contact=()=>{
    return(

    <div>
        <div className="container w-50">
        <div className="py-4">
            <h2 className="display-5">Contact</h2> 
            <p className="text-success">Have a question? Shoot us an email! </p>
        </div>
        <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-6 position-relative">
              <label for="validationTooltip01" className="form-label">First name *</label>
              <input type="text" className="form-control rounded-0 bg-light" id="validationTooltip01" value="Name" required/>

            </div>
            <div className="col-md-6 position-relative">
              <label for="validationTooltip02" className="form-label">Last name *</label>
              <input type="text" className="form-control rounded-0 bg-light" id="validationTooltip02" value="Surname" required/>

            </div>
            <div className="col-md-12 position-relative">
   
                <label for="exampleFormControlInput1" className="form-label">Email Address *</label>
                <input type="email" className="form-control  rounded-0 bg-light" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="col-md-12 position-relative">
              <label for="validationTooltip03" className="form-label">Subject *</label>
              <input type="text" className="form-control  rounded-0 bg-light" id="validationTooltip03" required/>

            </div>
            <div className="col-md-12 position-relative mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message *</label>
                <textarea className="form-control  rounded-0 bg-light" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            <div className="col-12">
              <button className="btn btn-outline-primary px-5 rounded-0" type="submit">Submit form</button>
            </div>
          </form>
    </div>
    </div>

    )
}
export default Contact