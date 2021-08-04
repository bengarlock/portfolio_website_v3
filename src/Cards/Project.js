import React from 'react'

class Project extends React.Component {

    render() {
        return(
            <div className='project-wrapper'>
                <a href={this.props.project.link} target="_blank" ref={this.props.project.name}>
                    <div className="project-object"  style={{backgroundImage: `url(${this.props.project.bg_image})`}}>
                        <p>{this.props.project.name}</p>
                    </div>
                </a>
            </div>

        )
    }
}

export default Project