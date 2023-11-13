
import React, { Component } from 'react';
import Hero from './hero'
import Tradinguse from './tradinguse';
import Leveluse from './leveluse';
import Gainsuse from './gainsuse';
import Infouse from './infouse';
import Footer from './footer';
import Nav from './nav';

class Uses extends Component {
    constructor() {
        super();
        this.state = {
            infobox: '',
            colortrading: '',
            levelcolor: '',
            gainscolor: '',
            infocolor: ''
        }

    }

    setDisplay = (box, color1, color2, color3, color4) => {
        this.setState({
            infobox: box,
            colortrading: color1,
            levelcolor: color2,
            gainscolor: color3,
            infocolor: color4

        })

    }


    render() {

        return (
            <>
                <Nav />
                <section className='uses-sec'>
                    <div className='uses-container'>
                        <div className='uses-title'>
                            <h2>How to use ?</h2>
                            <h3>Get all uses information you need.</h3>
                        </div>
                        <div className='uses-nav'>
                            <a onClick={() => this.setDisplay(<Tradinguse />, 'rgb(76, 76, 219)', '', '', '')} id='tradingcheck' style={{ borderBottomColor: this.state.colortrading, color: this.state.colortrading }}>Trading</a>
                            <a onClick={() => this.setDisplay(<Leveluse />, '', 'rgb(76, 76, 219)', '', '')} id='levelingcheck' style={{ borderBottomColor: this.state.levelcolor, color: this.state.levelcolor }}>Leveling</a>
                            <a onClick={() => this.setDisplay(<Gainsuse />, '', '', 'rgb(76, 76, 219)', '')} id='gaincheck' style={{ borderBottomColor: this.state.gainscolor, color: this.state.gainscolor }}>Gains</a>
                            <a onClick={() => this.setDisplay(<Infouse />, '', '', '', 'rgb(76, 76, 219)')} id='infocheck' style={{ borderBottomColor: this.state.infocolor, color: this.state.infocolor }}>Information</a>
                        </div>
                        {this.state.infobox}
                        <div className='uses-rules'>
                            <h2>Rules : </h2>
                            <h3>- Don't span commands</h3>
                            <h3>- Don't scam other people</h3>
                            <h3>- Don't cheat by typing name of waifus you don't have</h3>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}
export default Uses;