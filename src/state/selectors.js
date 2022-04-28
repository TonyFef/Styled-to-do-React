import { selector } from 'recoil';

import { todoItemsState, todoFilter } from './atoms';

export const filteredTodoItemsState = selector({
    key: 'filteredTodoItemsState',
    get: ({ get }) => {
        const filter = get(todoFilter);
        const items = get(todoItemsState);

        if (!filter || filter === 'All') return items;
        return items.filter((item) => item.cathegory === filter);
    },
});

export const todoItemsTotalState = selector({
    key: 'todoItemsTotalState',
    get: ({ get }) => {
        const items = get(todoItemsState);
        const totalItemsCount = items.length;
        const totalItemsCompletedCount = items.filter((item) => item.isComplete).length;
        const totalItemsUncompletedCount = totalItemsCount - totalItemsCompletedCount;
        const itemsCompletedPercent = Math.round((totalItemsCount === 0 ? 0 : totalItemsCompletedCount / totalItemsCount) * 100);

        return {
            totalItemsCount,
            totalItemsCompletedCount,
            totalItemsUncompletedCount,
            itemsCompletedPercent,
        };
    },
});
