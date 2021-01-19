import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import axios from "axios";
import "./Login.css";
import { Spinner } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            error: null,
            offset: 0,
            perPage: 10,
            currentPage: 0
        };
    }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    componentWillMount() {
        this.handleSelected();
    }

    handleSelected() {
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
                console.log(response.data.results_shown);
                this.setState.data = response.data.restaurants;
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
                <div className="home">
                    {!isLoading ? (
                        data.map(post => {
                            const { id, name } = post;
                            console.log(post, post.restaurant.name);
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
