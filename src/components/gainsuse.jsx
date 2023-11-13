
import React, { Component } from 'react';


class Gainsuse extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='commands'>
                <div>

                    <h2>Currency:</h2>
                    <h3>The Bot is using karma currency everytime you level up you gain more karma.</h3>
                </div>
                <div>
                    <h2>/daily</h2>
                    <h3>Gain daily amount of karma currency.</h3>
                </div>

            </div>);
    }
}
export default Gainsuse;