import React from 'react'
import "../stylesheets/Portfolio.css"
import "../stylesheets/ContainerTemplates.css"
import tablehost from "../media/tablehost.jpg"
import stariron from "../media/stariron.jpg"
import fluffytail from "../media/fluffytail.jpg"
import flatironfurniture from "../media/flatironfurniture.jpg"
import onlinebooking from "../media/onlinebooking.jpg"
import todo from '../media/todo.jpg'
import Project from "../Cards/Project";
import ScrollTrigger from "react-scroll-trigger";



class Portfolio extends React.Component {

    state = {
        current_tech: '',
        projects: [
            {
                id: 1,
                name: "Table Host",
                tech: ["react-js", "rails", "django"],
                link: "https://bengarlock.com/tablehost",
                bg_image: tablehost
            },
            {
                id: 2,
                name: "Star Iron",
                tech: ["javascript", "ruby-rails"],
                link: "https://mysterious-mountain-50790.herokuapp.com/",
                bg_image: stariron
            },
            {
                id: 3,
                name: "Fluffy Tail",
                tech: ["rails"],
                link: "https://fluffy-tail.herokuapp.com/",
                bg_image: fluffytail
            },
            {
                id: 4,
                name: "Flatiron Furniture",
                tech: ["react-js", "ruby-rails"],
                link: "https://pure-forest-57453.herokuapp.com/",
                bg_image: flatironfurniture
            },
            {
                id: 5,
                name: "Online Booking",
                tech: ["react-js"],
                link: "https://www.bengarlock.com:6321/",
                bg_image: onlinebooking
            },
            {
                id: 6,
                name: "ToDo Task Manager",
                tech: ["javascript"],
                link: "https://www.bengarlock.com:6322/",
                bg_image: todo
            },
        ]
    }

    componentDidMount() {
        this.setState({
            current_tech: "all"
        })
    }

    renderProjects = () => {
        if (this.state.current_tech === "all") {
            return this.state.projects.map(project => <Project key={project.id} project={project} />)
        } else {
            const projects = [...this.state.projects]
            const selectedProjects = projects.filter(project => project.tech.includes(this.state.current_tech))
            return selectedProjects.map(project => <Project key={project.id} project={project} />)
        }
    }

    onClickHandler = (e) => {
        this.setState({
            current_tech: e.target.id
        })
    }

    render() {
        return(
            <div id="page-wrapper">
                <div className="buffer"></div>
                <div className="page-header">- PORTFOLIO -</div>
                <div id="content-wrapper-portfolio">
                    <ul id='technology-list'>
                        <li className={this.state.current_tech === "all" ?
                            "navbar-li-selected-tech" : 'navbar-tech'}
                            id="all"
                            onClick={this.onClickHandler}>
                            ALL
                        </li>
                        <li className={this.state.current_tech === "javascript" ?
                            "navbar-li-selected-tech" : 'navbar-tech'}
                            id="javascript"
                            onClick={this.onClickHandler}>
                            JAVASCRIPT
                        </li>
                        <li className={this.state.current_tech === "react-js" ?
                            "navbar-li-selected-tech" : 'navbar-tech'}
                            id="react-js"
                            onClick={this.onClickHandler}>
                            REACT-JS
                        </li>
                        <li className={this.state.current_tech === "ruby-rails" ?
                            "navbar-li-selected-tech" : 'navbar-tech'}
                            id="ruby-rails"
                            onClick={this.onClickHandler}>
                            RUBY/RAILS
                        </li>
                    </ul>
                    <div id="project-wrapper">
                        {/*<Iframe className="portfolio-iframe" title="color_grid" source={"https://www.bengarlock.com:6325/"} />*/}
                        <div id="project-grid-wrapper">
                            {this.renderProjects()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio