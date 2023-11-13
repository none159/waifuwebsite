
import React, { Component } from 'react';


class Tradinguse extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='commands'>
                <div>
                    <h2>/inventory</h2>
                    <h3>List all of you're waifus.</h3>
                </div>
                <div>
                    <h2>/shop</h2>
                    <h3>Get a list of waifu and their ids that selling currently.</h3>
                </div>
                <div>
                    <h2>/buy</h2>
                    <h3>Buy waifus with karma, to buy waifu you need to specify id of the waifu.</h3>
                </div>
                <div>
                    <h2>/sell</h2>
                    <h3>Sell waifus to shop , to sell you need to specify the id of waifu from you're inventory and the cost.</h3>
                </div>
                <div>
                    <h2>/add</h2>
                    <h3>Add waifu to you're inventory by name.</h3>
                </div>
            </div>);
    }
}
export default Tradinguse;