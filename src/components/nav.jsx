import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Nav extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='navbar-container'>
                    <ul className='homeicon'>
                        <li>
                            <Link to='/waifuwebsite/'><a><i className="fa fa-home" aria-hidden="true"></i><br />Home</a></Link>
                        </li>
                    </ul>
                    <ul className='downloadicon'>
                        <li>
                            <Link to='/waifuwebsite/sourcecode'><a><i className="fa fa-download" aria-hidden="true"></i><br />Source Code</a></Link>
                        </li>
                    </ul>
                    <ul className='useicon'>
                        <li>
                            <Link to='/waifuwebsite/uses'><a><i className="fa fa-question-circle" aria-hidden="true"></i><br />How to use?</a></Link>
                        </li>
                    </ul>
                </div>
                <div className="arrow-right"></div>
            </nav>
        );
    }
}
export default Nav;