
import React, { Component } from 'react';


class Infouse extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='commands'>
                <div>
                    <h2>/help</h2>
                    <h3>Get list of commands and short informations about them.</h3>
                </div>
                <div>
                    <h2>/about</h2>
                    <h3>Get short introduction about bot.</h3>
                </div>
            </div>);
    }
}
export default Infouse;