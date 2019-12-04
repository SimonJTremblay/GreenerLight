import React, { Component } from 'react';
import CharityList from '../CharityList/CharityList'
import StripeCheckoutButton from '../StripeButton/StripeCheckoutButton';

class Donate extends Component {
    constructor() {
        super();
        this.state = {
            price: 0,
            charities: [],
        };
    }

    componentDidMount(){
        fetch('http://localhost:3000/charities')
        .then(response => response.json())
        .then(result => {
            if(result[0].name.length){
                this.setState({ charities: result })
            } else{
                // TODO wrap card in error handling component
            }
        }) 
    }

    render(){
        const{ price, charities } = this.state;
        return(            
            <div>
                <CharityList charities={ charities }/>
                <StripeCheckoutButton price={price} />
            </div>            
        );
    }
}

export default Donate;