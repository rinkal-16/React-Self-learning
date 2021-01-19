import React, { useState } from 'react';
import './App.css';
// import { v4 as uuid } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import SideBar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import Login from './components/pages/login';

// class App extends React.Component {
//     state = {
//         todos: []
//     }
//     componentDidMount() {
//         axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
//             .then(res => this.setState({ todos: res.data }));
//     }
//     // Toggle complete
//     markComplete = (id) => {
//         console.log(id);
//         this.setState({ todos: this.state.todos.map(todo => {
//             if(todo.id === id) {
//                 todo.completed = !todo.completed
//             }
//             return todo;
//             }) })
//     }
//     // Delete Todo
//     delTodo = (id) => {
//         axios.delete(`http://jsonplaceholder.typicode.com/todos?_limit=10/${id}`)
//             .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id
//                     !== id)]}))
//     }
//     // Add Todo
//     addTodo = (title) => {
//         // const newTodo = {
//         //     id: uuid(),
//         //     title,
//         //     completed: false
//         // }
//         // this.setState({todos: [...this.state.todos, newTodo]})
//         axios.post('https://jsonplaceholder.typicode.com/todos', {
//             title,
//             completed: false
//         })
//             .then(res => this.setState({ todos: [...this.state.todos, res.data ] }));
//
//     }
//
//     render() {
//
//         console.log(this.state);
//         console.log(HeaderModal);
//         return (
//             <Router history={history}>
//                 <div className="wrapper">
//                     <Provider store={store}>
//                         <div className="App">
//                             <div className="container-fluid">
//                                 <HeaderModal />
//                                 <Switch>
//                                     {/*<Route exact path="/" render={props => (*/}
//                                     {/*    <React.Fragment>*/}
//                                     {/*        <AddTodo addTodo={this.addTodo} />*/}
//                                     {/*        <Todos todos={this.state.todos}*/}
//                                     {/*               markComplete={this.markComplete}*/}
//                                     {/*               delTodo={this.delTodo} />*/}
//                                     {/*    </React.Fragment>*/}
//                                     {/*)} />*/}
//                                     <Route path="/about" component={About} />
//                                     <Route path="/login" component={Login} />
//                                     <Route path="/signup" component={Signup} />
//                                     <Route path="/home" component={Home} />
//                                     <Route path="/pagination" component={Pagination} />
//                                     <Route path="/shopping" component={Shopping} />
//                                 </Switch>
//                             </div>
//                         </div>
//                     </Provider>
//                 </div>
//             </Router>
//
//         );
//     }
// }

function App()  {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    const isAuthenticated = () => {
        localStorage.clear();
        if(localStorage.getItem('tokenId')) {
            console.log('token get');
            return true;
        } else {
            console.log('cannot get');
            return false;
        }
    }    
    return (
        <div> 
        { isAuthenticated ? 
                <BrowserRouter>
                    <div className="App wrapper">
                        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
                    </div>    
                </BrowserRouter>
            
            : <Login /> }
        </div>
    )
}

export default App;

