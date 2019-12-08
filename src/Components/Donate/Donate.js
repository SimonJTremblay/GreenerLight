import React, { Component } from 'react';
import CharityList from '../CharityList/CharityList'
import AmountSelector from '../Donations/AmountSelector'
import StripeCheckoutButton from '../StripeButton/StripeCheckoutButton';

class Donate extends Component {
    constructor() {
        super();
        this.state = {
            totalDonation: 0,
            charities: [],
            selectedCharity: '',
        };
    }

    onCharityChange = (charity) => {
        this.setState({selectedCharity: charity});
    }

    onAmountChange = (amount) => {
        this.setState({totalDonation: amount});
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
        const{ totalDonation, charities, selectedCharity } = this.state;
        return(            
            <div>
                <CharityList 
                    charities={ charities } 
                    selectedCharity={ selectedCharity }
                    onCharityChange={ this.onCharityChange }
                    />
                <div className="flex items-center pa3 ma2 center bg-washed-green">
                    <AmountSelector onAmountChange={this.onAmountChange}/>
                    <div>
                        <h2>Selected Charity: {selectedCharity}</h2>
                        <h2>Total amount ${totalDonation}</h2>
                        <StripeCheckoutButton totalDonation={totalDonation} selectedCharity={selectedCharity} />
                    </div>
                </div>
            </div>            
        );
    }
}

export default Donate;