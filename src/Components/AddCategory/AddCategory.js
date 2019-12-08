import React, {Component} from 'react';
import './addCategory.css';

class AddCategory extends Component{
    constructor(){
        super();
        this.state = {
            newCategory:'',
            message:''
        }
    }
    onChange = (event) => {
        this.setState({ newCategory: event.target.value });
    }

    saveCategory = () => {
        document.getElementById('name').value = '';
        fetch('http://localhost:3000/categories/pending', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify({
                title: this.state.newCategory
            })
        })
        .then(response => response.json())
        .then(category => {
            if(category[0].id){            // need to check for id b/c the server might send back a string with 'unable to...', which will set boolean to true
                var nc = this.state.newCategory;
                this.setState(
                    {   
                        newCategory: '',
                        message: `${nc} was entered with success`,
                    },
                )
            }
        })
    }
    
    render(){
        const {message} = this.state;
        return(
            <div className="pa4 black-80 center" >
                <div className="measure w-100">
                    <label htmlFor="name" className="f8 b db mb2">Enter New Category </label>
                    <div className="flex center">
                        <input 
                            id="name"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                            autoComplete="off"
                            onChange={this.onChange} 
                        />
                        <button 
                            className="ba b--black-20 pa2 mb2 db w-50"
                            onClick={() => this.saveCategory()}
                        >Save</button>
                    </div>
                    <small id="name-desc" className="f6 black-60 db mb2">Category suggestion will be sent to admin for review.</small>
                    <span>{message}</span>
                </div>
            </div>
        );
    }
}

export default AddCategory;
