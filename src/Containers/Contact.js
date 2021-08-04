import React from "react"
import "../stylesheets/Contact.css"
import "../stylesheets/ContainerTemplates.css"
import emailjs from 'emailjs-com';
import { Link } from 'react-scroll'
import ScrollTrigger from "react-scroll-trigger";


class Contact extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: '',
    }

    onChangeHandler = (e) => {
        if (e.target.name === 'first-name') {
            this.setState({
                first_name: e.target.value
            })
        } else if (e.target.name === 'last-name') {
            this.setState({
                last_name: e.target.value
            })
        } else if (e.target.name === "email") {
            this.setState({
                email: e.target.value
            })
        } else if (e.target.name === "subject") {
            this.setState({
                subject: e.target.value
            })
        } else if (e.target.name === "message") {
            this.setState({
                message: e.target.value
            })
        }
    }

    changePageEnter = () => {
        this.props.changePage("contact")
    }

    changePageExit = () => {
        this.props.changePage("blog")
    }


    onSubmitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_d89hmxa',
            'template_1rp8ehn',
            e.target,
            'user_SUJ1D5ZC8dWO5wGJ6bm0Y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }



    render() {
        return(
            <section id="page-wrapper">
                <ScrollTrigger onEnter={this.changePageEnter}>
                <div className="buffer"></div>
                <div className="page-header">- CONTACT -</div>

                <div className="content-wrapper-contact">
                    <div className="form-wrapper">
                        <p>Have a question or want to work together?</p>
                        <form onSubmit={this.onSubmitHandler} autoComplete="off">

                            <input
                                name='first-name'
                                value={this.state.first_name}
                                placeholder="First Name"
                                onChange={this.onChangeHandler}
                            />
                            <input
                                name='last-name'
                                value-={this.state.last_name}
                                placeholder="Last Name"
                                onChange={this.onChangeHandler}
                            />
                            <input
                                name='email'
                                value-={this.state.email}
                                placeholder="Email"
                                onChange={this.onChangeHandler}
                            />
                            <input
                                id="subject"
                                name='subject'
                                value={this.state.subject}
                                placeholder="Subject"
                                onChange={this.onChangeHandler}
                            />
                            <input
                                id="message"
                                name='message'
                                value={this.state.message}
                                placeholder="Message"
                                onChange={this.onChangeHandler}
                            />
                            <input id='submit' name='submit' type='submit' value="Submit" />
                        </form>
                    </div>
                    <Link to="home" smooth={true} spy={true} duration={500}>
                        <div className="return-home-wrapper">
                            <div id="return-home"></div>
                        </div>
                    </Link>


                    <div className="footer-wrapper">
                        <div className="footer-link">
                            <a href="https://ben-garlock.medium.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/000000/medium-monogram.png" alt="medium" />
                            </a>
                            <a href="https://github.com/bengarlock" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-glyphs/50/000000/github.png" alt="github" />
                            </a>
                            <a href="https://www.linkedin.com/in/ben-garlock-18400578/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"  alt="linkedin" />
                            </a>
                        </div>
                    </div>

                </div>
                </ScrollTrigger>
            </section>
        )
    }
}

export default Contact