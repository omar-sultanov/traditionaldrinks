import React, { Component } from "react";
import { connect } from 'react-redux';
class Footer extends Component{
    state={
        emails:[],
        email:""
    }
onClickMailGet=(e)=>{
    const myEmail=this.state.email
    const searchMail =myEmail.match(/[a-z 0-9]@/);

    if(searchMail==null){
        console.log("It is not a email ");
        this.sendMail("Omar","omar.sultanov.98@mail.ru","Ops")
    }
    else{
        this.state.emails.push(this.state.email)
        console.log(this.state.emails);
        // window.open(mailto:'omar.sultanov.98@gmail.com');
    }
}
sendMail=(name,email,message)=>{
    email.send({
        Host:'omar.sultanov.98@mail.ru',
        UserName:'omar.sultanov.98@mail.ru',
        Password:'aztu655a3',
        To:'omar.sultanov.98@mail.ru',
        From:'omar.sultanov.98@mail.ru',
        Subject:'sOMdpsdspd',
        Body:`Name ${name} email ${email} message ${message}`
    }).then((message)=>alert("dsfdsds"))
}

onChangeMailGet=(e)=>{

    this.setState({
        email:e.target.value
    })
}

    render(){

    return(

<div>
    <div id="footer"className="m-5 d-flex justify-content-center flex-column align-items-center">
            <h3 className="d-flex justify-content-center">Traditional<span>Drinks</span></h3>
        <div className="my-5 d-flex justify-content-center col-md-6 col-sm-12 flex-wrap">
            <input id="emailIn" onChange={(e)=>{this.onChangeMailGet(e)}}  className="form-contol rounded-0 px-3 m-1" type="email"  placeholder="Email Address"/>
            <input id="submitIn" onClick={(e)=>{this.onClickMailGet(e)}}  className="form-contol rounded-0 px-3 m-1 " type="submit" value="SIGN UP"/>
        </div>
        <div className="text-muted d-flex justify-content-center flex-column align-items-center" id="footerText">
            <h5 className="text-center">&copy; 2021 DRINKOFAZE. ALL RIGHTS RESERVED</h5>

        </div>
        <div className="my-1 d-flex justify-content-center col-md-6 col-sm-12 flex-wrap">
          <a href="#">FAQ</a>
          <a href="#">TERMS AND CONDITIONS</a>
          <a href="#">PRIVACY POLICY</a>
        </div>
    </div>
</div>

    )
   }
}

const mapStateToProps=state=>{
    return{
        syrups:state.syrup,
        teas:state.tea
    }
}

export default connect(mapStateToProps)(Footer);