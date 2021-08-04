import React from 'react'
import "../stylesheets/Navbar.css"
import { Link } from 'react-scroll'

class Navbar extends React.Component {

    state = {
        menu: ''
    }

    componentDidMount() {
        this.setState({
            menu: false
        })
    }

    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    onClickHandler = (e) => {
        this.props.changePage(e.target.id)
        if (this.state.menu) {
            this.toggleMenu()
        }
    }

    renderLinks = () => {
        return (
            <ul id="navbar-ul">
                <Link to="home"
                      smooth={true}
                      spy={true}
                      duration={500}>
                    <li className={this.props.currentPage === "home" ? "navbar-li-selected" : 'navbar-li'}
                        id="home"
                        onClick={this.onClickHandler}>HOME</li>
                </Link>
                <Link to="buffer"
                      smooth={true}
                      spy={true}
                      duration={500}>
                    <li className={this.props.currentPage === "about" ? "navbar-li-selected" : 'navbar-li'}
                        id="about"
                        onClick={this.onClickHandler}>ABOUT</li>
                </Link>
                <Link to="portfolio"
                      smooth={true}
                      spy={true}
                      duration={500}>
                    <li className={this.props.currentPage === "portfolio" ? "navbar-li-selected" : 'navbar-li'}
                        id="portfolio"
                        onClick={this.onClickHandler}>PORTFOLIO</li>
                </Link>
                <Link to="blog"
                      smooth={true}
                      spy={true}
                      duration={500}>
                    <li className={this.props.currentPage === "blog" ? "navbar-li-selected" : 'navbar-li'}
                        id="blog"
                        onClick={this.onClickHandler}>BLOG</li>
                </Link>
                <Link to="contact"
                      smooth={true}
                      spy={true}
                      duration={500}>
                    <li className={this.props.currentPage === "contact" ? "navbar-li-selected" : 'navbar-li'}
                        id="contact"
                        onClick={this.onClickHandler}>CONTACT</li>
                </Link>
            </ul>
        )
    }


    render() {
        return(
            <div id="navbar-wrapper">

                <div id="menu-button" onClick={this.toggleMenu}>
                    <div className="menu-line"/>
                    <div className="menu-line"/>
                    <div className="menu-line"/>

                    {this.state.menu ? (
                        <>
                            <div id="menu-dropdown-wrapper">
                                {this.renderLinks()}
                            </div>
                            <div id="menu-collapse-wrapper" onClick={this.toggleMenu}>
                            </div>
                        </>
                    ) : null}
                </div>
                <div id="fullscreen-nav">
                    {this.renderLinks()}
                </div>
            </div>
        )
    }
}

export default Navbar