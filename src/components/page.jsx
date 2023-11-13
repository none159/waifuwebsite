import React, { Component } from 'react'
import Nav from './nav';
import Hero from './hero'
import Footer from './footer'
class Page extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Nav />
                <Hero />
                <Footer />
            </>
        );
    }
}
export default Page;