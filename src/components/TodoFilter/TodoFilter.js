import React from 'react';

import './TodoFilter.css';

export function TodoFilter({ changeFilter, item }) {
    if (item.isShow) {
        return (
            <>
                <li className='cathegory-item' onClick={() => changeFilter(item.cathegory)}>
                    {item.cathegory}
                </li>
            </>
        );
    } else {
        return null;
    }
}
