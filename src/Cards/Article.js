import React from 'react'
import "../stylesheets/Article.css"

class Article extends React.Component {

    render() {
        return(
            <div>
                <a href={this.props.article.url}
                   target="_blank"
                   rel={this.props.article.title}>
                    <div className="article"  style={{backgroundImage: `url(${this.props.article.bg_image})`}}>
                        {this.props.article.title}
                    </div>
                </a>
            </div>
        )
    }
}

export default Article