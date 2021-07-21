import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function TodoList(props) {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];


        setTodos(newTodos);
        
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId))
    );
};

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    };

    return (
        <div>
            <div className="form-login">
            <HighlightOffIcon
          className="close-icon"
          onClick={() => props.setShowTask(false)}
        />
            <h1>Plan for Plants today</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
            todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo} 
            updateTodo={updateTodo}/>
            </div>
        </div>
    )
}

export default TodoList
