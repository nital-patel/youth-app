import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

const post = {
    title: 'Register For Hari Manan Shibir 2018\n',

};

ReactDOM.render(
    <Post
        title={post.title}/>,
    document.getElementById('root')
);

registerServiceWorker();