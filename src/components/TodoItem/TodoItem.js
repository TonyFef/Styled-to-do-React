import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import rubbish from '../../rubbish.svg';

import './TodoItem.css';

export function TodoItem({ text, isComplete, onToggleCheck, onDeleteClick, cathegory, id }) {

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
                </Form>
            </Card.Body>
        </Card>
    );
}
