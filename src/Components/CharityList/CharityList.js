import React, {Component} from 'react'
import Charity from './Charity'

class CharityList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCharity:''
        }
    }

    onComponentCharityChange = (charity) => {
        this.props.onCharityChange(charity);
    }

    render(){
        const { charities } = this.props;
        return(
            <div>
                {
                    charities.map(({id, ...otherSectionProps }) => (
                        <Charity 
                            key={id}
                            selectedCharity={ this.selectedCharity }
                            onComponentCharityChange={this.onComponentCharityChange}
                            {...otherSectionProps}
                        />
                    ))
                }
            </div>
    );
    }
}

export default CharityList;