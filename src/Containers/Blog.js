import React from "react"
import "../stylesheets/Blog.css"
import "../stylesheets/ContainerTemplates.css"
import Article from "../Cards/Article";
import image1 from "../media/image1.jpg"
import image2 from "../media/image2.jpg"
import image3 from "../media/image3.jpg"
import image4 from "../media/image4.jpg"
import image5 from "../media/image5.jpg"
import image6 from "../media/image6.jpg"
import image7 from "../media/image7.jpg"
import ScrollTrigger from "react-scroll-trigger";

class Blog extends React.Component {

    state = {
        articles: [
            {
                id: 1,
                title: "How to win the lottery with Python",
                url: "https://ben-garlock.medium.com/how-to-win-the-lottery-with-python-2d6c5fb5b057",
                bg_image: image1,
            },
            {
                id: 2,
                title: "Rails to Django",
                url: 'https://ben-garlock.medium.com/rails-to-django-c0748582c22f',
                bg_image: image2,

            },
            {
                id: 4,
                title: "Creating a native app and GUI with TKinter",
                url: 'https://ben-garlock.medium.com/creating-a-native-app-and-gui-with-tkinter-e5ad5a38c77d',
                bg_image: image3,
            },
            {
                id: 5,
                title: "CSS Grid",
                url: 'https://ben-garlock.medium.com/creating-a-native-app-and-gui-with-tkinter-e5ad5a38c77d',
                bg_image: image4,
            },
            {
                id: 6,
                title: "An intro to Selenium",
                url: 'https://ben-garlock.medium.com/selenium-is-a-pathway-to-the-dark-side-106a4bc80cbb',
                bg_image: image5,
            },
            {
                id: 7,
                title: "The Django REST framework",
                url: 'https://ben-garlock.medium.com/getting-up-and-running-with-the-django-rest-framework-fa560547e48f',
                bg_image: image6,
            },
            {
                id: 8,
                title: "Dynamic Programming",
                url: 'https://ben-garlock.medium.com/dynamic-programming-5dd99abb0612',
                bg_image: image7,
            },

        ]

    }

    renderAricles = () => {
        return this.state.articles.map(article => <Article key={article.id} article={article}/>)
    }

    render() {
        return(
            <div id="page-wrapper">
                    <div className="buffer"></div>
                    <div className="page-header">- BLOG -</div>
                    <div className="content-wrapper-blog">
                        <div id="article-wrapper">
                            {this.renderAricles()}
                        </div>
                    </div>
            </div>
        )
    }
}

export default Blog