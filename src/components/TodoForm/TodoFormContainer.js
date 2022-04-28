import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { v4 as uuid } from 'uuid';

import { TodoForm } from './TodoForm';
import { todoItemsState, todoFliterCategories } from '../../state';

export function TodoFormContainer() {
    const setTodoList = useSetRecoilState(todoItemsState);

    const categoriesState = useRecoilValue(todoFliterCategories);
    const uncategorized = categoriesState.find((item) => item.isShow === false).cathegory

    function handleSubmit(text) {
        // const CATEGORY = { UNCATEGORIZED: 'Uncategorized' };
        const createTodoItemByText = (text, cathegory = uncategorized) => {
            return {
                id: uuid(),
                text,
                isComplete: false,
                cathegory,
            };
        };
        setTodoList((oldTodoList) => [...oldTodoList, createTodoItemByText(text)]);
    }

    return <TodoForm onSubmit={handleSubmit} />;
}
