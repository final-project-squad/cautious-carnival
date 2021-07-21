import React, {useState, useEffect, useRef} from 'react';
import HighlightOffIcon from "@material-ui/icons/HighlightOff";



function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        // <div className="form-login">
        <form className='todo-form' onSubmit={handleSubmit}>
        {/* <HighlightOffIcon
          className="close-icon"
          onClick={() => props.setShowTask(false)}
        /> */}
        <input
        type='text'
        placeholder='Add a task'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />
          <button className='to-do-button'>Add a task</button>  
        </form>
        // </div>
    );
}

export default TodoForm;