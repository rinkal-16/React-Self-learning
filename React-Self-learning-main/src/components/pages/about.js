import React, { Component } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import PostForm from './PostForm';
// import { Provider } from 'react-redux';
// import store from './../../store';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/postActions';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
function App() {

    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Edit</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
}

class About extends Component {

    componentWillMount() {
        console.log('fetchPosts...');
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const postItems = this.props.posts.map((post, id) => (
            <div key={post.id}>
                <Card className="text-left">
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="primary" key={post.name} onClick={() => this.props.deletePost(id)}>Delete</Button>
                        <App />
                    </Card.Footer>
                </Card>
            </div>
        ));
        return (
            <React.Fragment>
                <PostForm />
                <hr />
                <div key={postItems.id}>
                    <p>{postItems}</p>
                </div>
            </React.Fragment>

        );
    }
}

About.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    deletePost,
    posts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts,
    deletePost: state.posts
})

export default connect(mapStateToProps, { fetchPosts, deletePost })(About);
