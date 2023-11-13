import React, { Component, useState, useEffect } from 'react'
import waifu from '../images/waifu.png'
import waifu1 from '../images/waifu2.png'
import { Link } from 'react-router-dom';
class Footer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <footer className='footer'>
                <div className='footer-container'>
                    <div>
                        <img className='waifuimg' src={waifu1}></img>
                    </div>
                    <div>
                        <Link to='/waifuwebsite/'><a>Home</a></Link>
                        <Link to='/waifuwebsite/sourcecode'><a>Source Code</a></Link>
                        <Link to='/waifuwebsite/uses'><a>How to use?</a></Link>
                        <Link to='/waifuwebsite/contact'><a>Contact</a></Link>
                    </div>
                    <div>
                        <h3>Support</h3>
                    </div>
                </div>
            </footer>

        );
    }
}
export default Footer;