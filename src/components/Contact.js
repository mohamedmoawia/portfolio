import React from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './contact.css';
import './About.css';


class Contact extends React.Component {
    state = {
        userEmail: '',
        name: '',
        message: ''
    }

    handleClick = (copy) => {
        navigator.clipboard.writeText(copy);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let serviceID = "default_service";
        let templateID = "portfolio";
        let userID = "user_kH7jmdECIfK7has7QJI4H";
        emailjs.send(serviceID, templateID, this.state, userID).then((response) => {
            this.setState({
                userEmail: '',
                name: '',
                message: ''
            });
            alert('Email has been sent!');
        }, (err) => {
            this.setState({
                userEmail: '',
                name: '',
                message: ''
            });
            alert('try again!');
        })
    }
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleEmailChange = (e) => {
        this.setState({
            userEmail: e.target.value
        })
    }
    handleMessageChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="bg-image">
                    <div id="contacts">
                        <div className="pointers-container d-flex justify-content-left container-fluid">
                            <div className='move-left pointer'>
                                <Link className='text-decoration-none' to="/">
                                    <i className="fas fa-chevron-left"></i>Home
                        </Link>
                            </div>
                            <div className='d-flex'>
                                <div className='move- left pointer'>
                                    <Link className='text-decoration-none' to="/About" >
                                        <i className="fas fa-chevron-left"></i>About
                            </Link>
                                </div>
                                <div className='move-left pointer'>
                                    <Link className='text-decoration-none' to="/Projects">
                                        <i className="fas fa-chevron-left"></i>Projects
                            </Link>
                                </div>
                            </div>
                        </div>
                        <div id='social-form-container'>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" autoComplete='off' placeholder="Enter your name.." id="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input onChange={this.handleEmailChange} value={this.state.userEmail} type="email" className="form-control" autoComplete='off' placeholder="Enter your email.." id="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea onChange={this.handleMessageChange} value={this.state.message} className="form-control" placeholder="Your message.." id="message" />

                                </div>
                                <div className="d-flex justify-content-center">
                                    <button id="form-button" type="submit" className="btn">Send Message</button>
                                </div>
                            </form>

                            <div id='social'>
                                <div>
                                    <i className="fas fa-mobile-alt"></i>
                                    <span className="move" title='copy' onClick={() => this.handleClick('01128830027')}> 01128830027</span>
                                </div>

                                <div style={{ position: 'relative', right: '3px' }}>
                                    <i className="far fa-envelope"> </i>
                                    <span className="move" title='copy' onClick={() => this.handleClick('mo3wia94@gmail.com')}> Mo3wia94@gmail.com </span>
                                </div>
                                <div>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span style={{ textDecoration: 'none' }}> El maadi, Cairo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact