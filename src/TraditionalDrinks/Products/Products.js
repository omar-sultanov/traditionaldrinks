import React, { Component } from 'react';
import { connect } from 'react-redux';
import  "./StyleProducts.css";


class Products extends Component {
state={
    searchQuery:""
}
 searchProducts=(event)=>{
            this.setState({
               searchQuery:event.target.value
            })
        }  
    render() {
        console.log(this.state.searchQuery);
               let filterdSyrups=this.props.syrups.filter(
                    (drink)=>{
                        return drink.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1
                    }
                ) 
                let filterdTea=this.props.teas.filter(
                    (drink)=>{
                        return(
                            drink.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1
                           )
                    }
                )

let nameOfTea,nameOfSyrup;
for(let a=0; a<filterdTea.length; a++){
 
    if (filterdTea[a].name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1) {
        nameOfTea="Teas"
    }
}   
for(let b=0; b<filterdSyrups.length; b++){
    if  (filterdSyrups[b].name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1) {
        nameOfSyrup="Syrups"
    }
}   
        return (
        <div className="Product">
             <input type="text" onChange={(event)=>{this.searchProducts(event)}}  placeholder="Search"/>
                <div className="syrup">
                <h3>{nameOfSyrup}</h3>
                    {filterdSyrups.map(product=>{
                return(
                <div className="card">
                    <img src={product.imageURL}   className="card-img-top" alt={product.id}/>
                    <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.overview}</p>
                </div>
            </div>
                )
            })}  
            </div>
             <div className="tea">                
                <h3>{nameOfTea}</h3>
                {filterdTea.map(product=>{
                return(
                <div className="card">
                    <img src={product.imageURL}   className="card-img-top" alt={product.id}/>
                    <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.overview}</p>
                </div>
            </div>
                )
            })}  
            </div>
        </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
        syrups:state.syrup,
        teas:state.tea,
        searchQuery:state.searchQuery,
        nameOfCards:state.nameOfCards
    }
}

export default connect(mapStateToProps)(Products);