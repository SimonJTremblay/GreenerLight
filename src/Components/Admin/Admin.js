import React, {Component} from 'react';
import Request from './Request'


class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            message:'',
        }
    }

    onRequestDecision = (categoryId, answer) => {
        this.props.updatePendingCategories(categoryId, answer);
    }

    render(){
        const { PendingRequestsList, updateRequestMessage } = this.props;
        return(
            <div>
                <div>
                    {
                        PendingRequestsList.map(({...otherSectionProps },i) => (
                            <Request 
                                key={i}
                                onRequestDecision={this.onRequestDecision}
                                {...otherSectionProps}
                            />
                        ))
                    }
                </div>
                   <div className="f3 white">
                    {updateRequestMessage}                    
                    </div>
            </div>
    );
    }
}

export default Admin;