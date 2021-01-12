import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Todos from './components/Todos'
import './App.css';
import HeaderModal from './components/layout/HeaderModal';
import AddTodo from "./components/AddTodo";
import About from "./components/pages/about";
// import { v4 as uuid } from 'uuid';
import axios from "axios";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import Home from "./components/pages/home";
import Pagination from "./components/pages/pagination";
import { Provider } from 'react-redux';
import store from './store';
import history from './history';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    state = {
        todos: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }));
    }

    // Toggle complete
    markComplete = (id) => {
        console.log(id);
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
            }) })
    }
    // Delete Todo
    delTodo = (id) => {
        axios.delete(`http://jsonplaceholder.typicode.com/todos?_limit=10/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id
                    !== id)]}))
    }
    // Add Todo
    addTodo = (title) => {
        // const newTodo = {
        //     id: uuid(),
        //     title,
        //     completed: false
        // }
        // this.setState({todos: [...this.state.todos, newTodo]})
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
            .then(res => this.setState({ todos: [...this.state.todos, res.data ] }));

    }
    render() {
        console.log(this.state);
        console.log(HeaderModal);
        return (
            <Router history={history}>
                <Provider store={store}>
                    <div className="App">
                        <div className="container-fluid">
                            <HeaderModal />
                                <Switch>
                                <Route exact path="/" render={props => (
                                    <React.Fragment>
                                        <AddTodo addTodo={this.addTodo} />
                                        <Todos todos={this.state.todos}
                                        markComplete={this.markComplete}
                                        delTodo={this.delTodo} />
                                    </React.Fragment>
                                )} />
                                <Route path="/about" component={About} />
                                <Route path="/login" component={Login} />
                                <Route path="/signup" component={Signup} />
                                <Route path="/home" component={Home} />
                                <Route path="/pagination" component={Pagination} />
                                </Switch>
                        </div>
                    </div>
                </Provider>
            </Router>

        );
    }
}

export default App;
