import React, {Component} from 'react';
import './style.css'
import Typed from 'react-typed'
const Header = () =>{
        return (
            <div className={'header-wraper'} >
                <div className={'main-info'}>
                    <h1>web development and websites promotion</h1>
                    <Typed
                        className={'typed-text'}
                        strings={["Web Design","Web Development","Facebook Ads ", "Google ads"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    <a href={'#'} className={'btn-main-offer'} >Contact me</a>
                </div>
            </div>
        );
}


export default Header;