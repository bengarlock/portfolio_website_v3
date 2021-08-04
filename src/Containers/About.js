import React from "react"
import "../stylesheets/About.css"
import "../stylesheets/ContainerTemplates.css"
import profile_photo from "../media/profile_photo.jpg"
import Techstack from "../Cards/Techstack";


class About extends React.Component {

    state = {
        technologies: [
            {
                id: 1,
                name: "PYTHON",
            },
            {
                id: 2,
                name: "RUBY/RAILS",
            },
            {
                id: 3,
                name: "JAVASCRIPT",
            },
            {
                id: 4,
                name: "DJANGO",
            },
            {
                id: 5,
                name: "REACT",
            },
            {
                id: 6,
                name: "SQL",
            },
            {
                id: 7,
                name: "HTML5",
            },
            {
                id: 8,
                name: "CSS",
            },
            {
                id: 9,
                name: "API",
            },
            {
                id: 10,
                name: "REDUX",
            },
            {
                id: 11,
                name: "GIT",
            },
            {
                id: 12,
                name: "APACHE",
            }
        ]
    }

    renderTechnologies = () => {
        return this.state.technologies.map(technology => <Techstack key={technology.id} technology={technology}/>)
    }

    render() {
        return(
            <section>
                    <div id="page-wrapper">
                    <div className="buffer"></div>
                    <div className="page-header">- ABOUT -</div>
                    <div className="content-wrapper-about">
                        <div className="header-box" id="technology">TECHNOLOGY</div>
                        <div className="header-box" id="experience">EXPERIENCE</div>
                        <div className="header-box" id="innovation">INNOVATION</div>
                        <div className="header-box" id="reliability">RELIABILITY</div>
                    </div>
                    <div id="profile-wrapper">
                        <div id="profile-image-wrapper">
                            <img className="profile-photo" src={profile_photo} alt="profile_photo" />
                            <div style={{fontSize: "2em", textAlign:"center"}}>
                                A little about me...
                            </div>
                            <div className="about-text-box">
                                <br />
                                <div>
                                    I'm a full stack developer based out of New York.  I have sixteen years of
                                experience working in the Technology Industry, most notably with &nbsp;
                                        <a href="https://www.opentable.com" target="_blank" rel="noreferrer">
                                            OpenTable.
                                        </a>
                                </div>
                                <br />
                                <div>
                                    I believe in writing clean and efficient code that can scale. I also understand
                                    the need to deliver features to market quickly. If you'd like to have a
                                    conversation, please feel free to contact me.
                                 </div>
                            </div>
                        </div>
                        <div id="tech-stack">
                            {this.renderTechnologies()}
                        </div>
                    </div>
                    </div>
            </section>

        )
    }
}

export default About