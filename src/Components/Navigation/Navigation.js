import React from 'react';
import { IoIosWarning } from "react-icons/io";
import {
    IS_ADMIN,
    IS_USER
  } from '../../constants';

const Navigation = ({ onRouteChange, isSignedIn, userPermission, areRequestsPending }) => {
    if(isSignedIn && userPermission === IS_ADMIN){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <div className=" flex items-center f4 grow no-underline br-pill ba bw2 ph3 ma1 dib dark-black pointer">
                    <p onClick={() => onRouteChange('admin')} >Admin</p>
                    {
                        areRequestsPending
                        ?
                            <IoIosWarning className="f4 red items-center"/>
                        :
                            <span></span>
                    }
                </div>
                <p onClick={() => onRouteChange('home')} className='f4 grow no-underline br-pill ba bw2 ph3 pv2 ma1 dib dark-black pointer'>Home</p>
                <p onClick={() => onRouteChange('donate')} className='f4 grow no-underline br-pill ba bw2 ph3 pv2 ma1 dib dark-blue pointer'>Donate</p>
                <p onClick={() => onRouteChange('signout')} className='f4 grow no-underline br-pill ba bw2 ph3 pv2 ma1 dib dark-red pointer'>Sign Out</p>
            </nav>
        );
    }
    else if(isSignedIn && userPermission === IS_USER){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
              <p onClick={() => onRouteChange('home')} className='f4 grow no-underline br-pill ba bw2 ph3 pv2 ma1 dib dark-black pointer'>Home</p>
              <p onClick={() => onRouteChange('donate')} className='f4 grow no-underline br-pill ba bw2 ph3 pv2 ma1 dib dark-blue pointer'>Donate</p>
              <p onClick={() => onRouteChange('signout')} className='f4 grow no-underline br-pill ba bw2 ph3 pv2 ma1 dib dark-red pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <p onClick={() => onRouteChange('signin')} className='f4 grow no-underline br-pill ba bw2 ph3 pv2 ma1 dib dark-black pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f4 grow no-underline br-pill ba bw2 ph3 pv2 ma1 dib dark-black pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;