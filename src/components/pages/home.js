import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import axios from "axios";
import "./Login.css";
import { Spinner } from 'reactstrap';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        isLoading: true,
        data: [],
        error: null,
        offset: 0,
        perPage: 10,
        currentPage: 0
    };
    // this.handlePageClick = this.handlePageClick.bind(this);

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: "https://developers.zomato.com/api/v2.1/search",
            headers: {
                "user-key": "19a4a92dfe090929241d10990360f00b",
                "content-type": "application/json"
            }
        })
            .then(response => {
                this.setState({
                    data: response.data.restaurants,
                    isLoading: false
                })
                console.log(response.data.restaurants);
                this.setState.data = response.data.restaurants;
                console.log(this.setState.data);
            })
            .catch(error => {
                this.setState({ error, isLoading: false });
                console.log(error);
            });
    }

    render() {
        const { isLoading, data } = this.state;
        return (
            <React.Fragment>
                <h1>Restaurant data</h1>
                <div>
                    {!isLoading ? (
                        data.map(post => {
                            const { id, name } = post;
                            console.log(post.restaurant.id, post.restaurant.name);
                            return (
                                <div key={post.restaurant.id}>
                                    <p>{post.restaurant.name}</p>
                                    <hr />
                                </div>
                            );
                        })
                    ) : (
                        <Spinner style={{ width: '3rem', height: '3rem' }} />
                    )}
                </div>
            </React.Fragment>
        );

    }
}

Home.propTypes = {};

export default Home;
