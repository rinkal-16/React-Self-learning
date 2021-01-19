import { FETCH_POSTS, NEW_POSTS, DELETE_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetching...');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}

export const createPosts = (postData) => dispatch => {
    console.log('action called...');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POSTS,
            payload: post
        }));
}

export const deletePost = id => dispatch => {
    console.log('delete action...');
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(post =>
            dispatch({
                type: DELETE_POST,
                payload: id
            }),
        );
};
