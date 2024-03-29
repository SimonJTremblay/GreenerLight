import React, { Component } from 'react'

//we made it a smart component (with class and all) so it has state on username and password
// it only cares about signin state and other components don't either, so it made sens to make it smart, as opposed to blaoting App.js
class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            badSignIn: false
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }
    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            } else {
                this.setState({badSignIn: true});
            }
        })
    }
    render(){
        const { onRouteChange } = this.props;
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        
                        {
                            (this.state.badSignIn)
                            ?
                                <div>
                                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                                    <p className="f4 fw6 ph0 mh0">Username/Password combination incorrect.</p>
                                </div>
                            :
                                <div>
                                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                                </div>
                        }
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                autoComplete="off"
                                onChange={ this.onEmailChange }
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={ this.onPasswordChange }
                            />
                        </div>
                        {/* {<label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>} */}
                    </fieldset>
                    <div className="">
                        <input 
                            onClick={ this.onSubmitSignIn }
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Sign in"
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                    </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;