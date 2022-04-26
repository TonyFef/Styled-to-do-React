import React from 'react';

import './Home.css';
import { TodoListContainer, TodoFormContainer, TodoFilterContainer } from '../components';

export function Home() {
    return (
        <>
            <div className='common'>
                <div className='left'>
                    <div className='home__todofilter-container'>
                        <TodoFilterContainer />
                    </div>
                </div>
                <div className='right'>
                    <div className='home__title-container'>All Tasks</div>
                    <div className='home__todoform-container'>
                        <TodoFormContainer />
                    </div>
                    <div className='home__todolist-container'>
                        <TodoListContainer />
                    </div>
                </div>
            </div>
        </>
    );
}
