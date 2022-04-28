import React from 'react';
import { useRecoilState } from 'recoil';

import { TodoItem } from './TodoItem';
import { todoItemsState } from '../../state';

export function TodoItemContainer({ item }) {
    const [todoItems, setTodoItems] = useRecoilState(todoItemsState);

    // console.log(item);

    const toggleItemCheck = () => {
        setTodoItems(
            getItemsWithUpdateItem(todoItems, {
                ...item,
                isComplete: !item.isComplete,
            })
        );
    };

    const deleteItem = () => {
        const newList = todoItems.filter((_item) => _item.id !== item.id);
        setTodoItems(newList);
    };

    return (
        <TodoItem
            text={item.text}
            isComplete={item.isComplete}
            onToggleCheck={toggleItemCheck}
            onDeleteClick={deleteItem}
            cathegory={item.cathegory}
            id={item.id}
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
