import React  from "react";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

class TodoItems extends React.Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/> {' '}
                    { title }
                    <button style={btnStyle}
                            onClick={this.props.delTodo.bind(this, id)}>Delete</button>
                    <Button style={btnStyle}>
                        Update
                    </Button>

                </p>
            </div>
        )
    }
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius:'50%',
    cursor: 'pointer',
    float: 'right'
}
// PropTypes
TodoItems.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItems;



