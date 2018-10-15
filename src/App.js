import React, { Component } from 'react';
import './App.css';

class Post extends Component {

    render() {
        return (
            <div>
                <img src={'https://events.yds.org/images/hms-hero.jpg'}/>

                <h1>{this.props.title}</h1>
                <p>Enter your email address to see if you have an account or create an account</p>
                <input className="input"
                       type="text"
                       placeholder="Email"
                />

            </div>
        );
    }
}

export default Post;






