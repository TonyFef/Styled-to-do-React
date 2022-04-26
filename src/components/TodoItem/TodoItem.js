import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';

import rubbish from '../../rubbish.svg';

import './TodoItem.css';

let counter = 0;

export function TodoItem({ text, isComplete, onToggleCheck, onDeleteClick, cathegory }) {
    counter++;
    const id = 'checkbox-id' + counter;

    return (
        <Card>
            <Card.Body>
                <Form>
                    <div className='list-all'>
                        <div className='list-left'>
                            <input type='checkbox' id={id} checked={isComplete} onChange={(e) => onToggleCheck(e.target.value)} />
                            <label htmlFor={id} className='form-span'>
                                {text}
                            </label>
                            <span className='cathegory'>{cathegory}</span>
                        </div>
                        <div className='list-right'>
                            <button type='button' onClick={onDeleteClick} className='list-delete__button'>
                                <img src={rubbish} alt='delete' className='list-delete__img' />
                            </button>
                        </div>
                    </div>

                    {/* <input
                                type='checkbox'
                                id='item'
                                name='item'
                                className='custom-checkbox'
                                checked={isComplete}
                                onChange={(event) => onToggleCheck(event.target.value)}
                            />
                            <label htmlFor='item'>{text}</label> */}

                    {/* <Col></Col> */}

                    {/* <Form.Control type='text' value={text} onChange={(event) => onTextUpdate(event.target.value)} /> */}
                    {/* </Form.Row> */}
                </Form>
            </Card.Body>
        </Card>
    );
}
