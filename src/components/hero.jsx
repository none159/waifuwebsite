import React, { Component, useState, useEffect } from 'react'
import waifu from '../images/waifu.png'


class Hero extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section className='hero-sec'>
                <div className='hero-container'>
                    <div className='topsection'>
                        <div className='left-topsection'>
                            <img className='waifuimg' src={waifu}></img>
                            <h4>Trap</h4>
                        </div>
                        <div className='right-topsection'>
                            <h2>WaifuTrade</h2>
                            <h3>Increase server economy by trading waifus with you're server members</h3>
                            <a href="https://discord.com/api/oauth2/authorize?client_id=1136375211864891432&permissions=8&scope=bot">INVITE ME</a>
                        </div>
                    </div>
                    <div className='about-bot'>
                        <h2>About <span>W</span>aifu<span>T</span>rade</h2>
                        <h3>WaifuTrade is a discord bot, Its primary function, trading waifus between members, adds a unique and delightful dimension to the anime and gaming communities that thrive on these platforms. With a simple command, users can engage in friendly waifu exchanges, fostering a sense of camaraderie and competition among server members. WaifuTrade not only enhances the entertainment value of Discord servers but also provides a safe space for fans to connect over their shared love for waifus, creating a vibrant and welcoming community that celebrates the diverse world of anime and manga.</h3>
                    </div>
                    <div className='featuresbox'>
                        <h2>What The Bot Can Do <span style={{ color: "rgb(76, 76, 219)" }}>?</span></h2>
                        <div className='features'>
                            <div>
                                <h3><i class="fa fa-exchange" aria-hidden="true" style={{ color: "rgb(76, 76, 219" }}></i> Trade virtual waifus</h3>
                                <h3><i class="fa fa-level-up" aria-hidden="true" style={{ color: "rgb(76, 76, 219" }}></i> Leveling system</h3>
                            </div>
                            <div>
                                <h3><i class="fa fa-signal" aria-hidden="true" style={{ color: "rgb(76, 76, 219" }}></i> Ranking System</h3>
                                <h3><i class="fa fa-money" aria-hidden="true" style={{ color: "rgb(76, 76, 219" }}></i> Karma currency system</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Hero;
