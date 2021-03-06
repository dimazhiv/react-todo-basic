import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import PropTypes from 'prop-types';

function Todo(props) {
    
    return (
        <div className={`todo${props.completed ? ' completed' : ''}`}>
            <Checkbox checked={props.completed} onChange={() => props.onStatusChange(props.id)} />
            <span className="todo-title">{props.title}</span>
            <Button className="delete icon" icon="delete" onClick={() => props.onDelete(props.id)} />
        </div>
    );
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onstatusChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired

};

export default Todo;