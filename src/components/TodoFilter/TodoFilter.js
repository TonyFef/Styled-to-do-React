import React from 'react';

import './TodoFilter.css';

export function TodoFilter({ changeFilter }) {
    return (
        <ul className='choose-cathegory'>
            <li className='cathegory-item' onClick={(e) => changeFilter(e.target.textContent)}>
                All
            </li>
            <li className='cathegory-item' onClick={(e) => changeFilter(e.target.textContent)}>
                Groceries
            </li>
            <li className='cathegory-item' onClick={(e) => changeFilter(e.target.textContent)}>
                College
            </li>
            <li className='cathegory-item' onClick={(e) => changeFilter(e.target.textContent)}>
                Payments
            </li>
        </ul>
    );
}
