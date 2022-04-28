import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { TodoFilter } from './TodoFilter';
import { todoFilter, todoFliterCategories } from '../../state';

export function TodoFilterContainer() {
    const [filter, setFilter] = useRecoilState(todoFilter);

    const categoriesState = useRecoilValue(todoFliterCategories);

    const updateFilter = (value) => {
        setFilter(value);
    };

    return (
        <ul className='choose-cathegory'>
            {categoriesState.map((item) => {
                return <TodoFilter value={filter} changeFilter={updateFilter} item={item} />;
            })}
        </ul>
    );
}
