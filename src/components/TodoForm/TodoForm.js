import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import './TodoForm.css';

export function TodoForm({ onSubmit }) {
    const [text, setText] = useState('');
    // console.log(text);
    function handleChange(value) {
        setText(value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(text);
        setText('');
    }
    return (
        <div className='todo-form__form-container'>
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    className='my-form__add'
                    as='input'
                    type='text'
                    placeholder='Add a new task inside ‘All’ category'
                    value={text}
                    onChange={(event) => handleChange(event.target.value)}
                />
            </Form>
        </div>
    );
}
