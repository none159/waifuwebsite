
import React, { Component } from 'react';
import gitwaifu from '../images/gitwaifu.jpeg'
import Footer from './footer';
import Nav from './nav';

class Sourcecode extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Nav />
                <section className='source-sec'>
                    <div className='source-container'>
                        <div className='source-title'>
                            <h2>Bot Source Code</h2>
                        </div>
                        <a href='https://github.com/none159/ainzooal'>
                            <div className='repbox'>
                                <img src={gitwaifu}></img>
                                <h2>WaifuTrade Repo</h2>
                            </div>
                        </a>
                        <div className='disclaimer'>
                            <h2><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Disclaimer :</h2>
                            <h3>The bot may have some bugs if you found any bugs please report them on <span>email@email.com</span></h3>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        );
    }
}
export default Sourcecode;