import React from 'react'
import "./stylesheets/App.css"
import Home from "./Containers/Home";
import About from "./Containers/About";
import Portfolio from "./Containers/Portfolio";
import {BrowserRouter, Routes, Route} from "react-router-dom";


import {Element} from 'react-scroll'
import Navbar from "./Containers/Navbar";
import Blog from "./Containers/Blog";
import Contact from "./Containers/Contact";
import Demandbase from "./Containers/Demandbase";


class App extends React.Component {

    state = {
        current_page: ''
    }

    componentDidMount() {
        this.setState({
            current_page: "home"
        })
    }

    changePage = (page) => {
        this.setState({
            current_page: page
        })
    }


    render() {
        return (
            <div id="app-wrapper">
                Test
                {this.state.current_page === "home" ? null : <Navbar
                    changePage={this.changePage} currentPage={this.state.current_page}/>}
                {/*<BrowserRouter>*/}
                {/*    <Routes>*/}
                {/*        /!*<Route path="/demandbase" element={<Demandbase />} />*!/*/}

                {/*        <Route path="/">*/}
                {/*            <Element name="home" id="home-wrapper">*/}
                {/*                <Home changePage={this.changePage}/>*/}
                {/*            </Element>*/}
                {/*            <Element name="about">*/}
                {/*                <About changePage={this.changePage}/>*/}
                {/*            </Element>*/}
                {/*            <Element name="portfolio">*/}
                {/*                <Portfolio changePage={this.changePage}/>*/}
                {/*            </Element>*/}
                {/*            <Element name="blog">*/}
                {/*                <Blog changePage={this.changePage}/>*/}
                {/*            </Element>*/}
                {/*            <Element name="contact">*/}
                {/*                <Contact changePage={this.changePage}/>*/}
                {/*            </Element>*/}
                {/*        </Route>*/}
                {/*    </Routes>*/}
                {/*</BrowserRouter>*/}
            </div>
        );
    }

}

export default App
