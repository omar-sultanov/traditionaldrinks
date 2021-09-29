import React, { Component } from 'react';
import Jumbotron from "../Jumbotron";
import Container from "../Container";


class Home extends Component {
    render() {
        return (
            <div>
            <Jumbotron/>
            <Container/>
            </div>
        );
    }
}

export default Home