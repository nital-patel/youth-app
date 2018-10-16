import React, { Component } from 'react';
import './App.css';

class Post extends Component {
    render() {
        return (
            <div>
            <div>
                <img className="image" src={'https://events.yds.org/images/hms-hero.jpg'} />
            </div>
            <div>
                <h1 className="title">{this.props.title}</h1>
                <p className="email">Enter your email address to see if you have an account or create an account</p>
                <div>
                <input className="input" type="email" placeholder="Email"/>
                <button className="btn">Enter</button>
                </div>
            </div>
            </div>
        );
    }
}

export default Post;






