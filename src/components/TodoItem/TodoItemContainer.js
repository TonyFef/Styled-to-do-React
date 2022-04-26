import React from 'react';
import { useRecoilState } from 'recoil';

import { TodoItem } from './TodoItem';
import { todoItemsState } from '../../state';

export function TodoItemContainer({ item }) {
    const [_todoItemsState, setTodoItemsState] = useRecoilState(todoItemsState);

    const toggleItemCheck = () => {
        setTodoItemsState(
            getItemsWithUpdateItem(_todoItemsState, {
                ...item,
                isComplete: !item.isComplete,
            })
        );
    };

    const deleteItem = () => {
        const newList = _todoItemsState.filter((_item) => _item.id !== item.id);
        setTodoItemsState(newList);
    };

    return (
        <TodoItem
            text={item.text}
            isComplete={item.isComplete}
            onToggleCheck={toggleItemCheck}
            onDeleteClick={deleteItem}
            cathegory={item.cathegory}
        />
    );
}

function getItemsWithUpdateItem(items, item) {
    return items.map((_item) => {
        // console.log(_item);
        if (_item.id === item.id) {
            return item;
        }
        return _item;
    });
}
