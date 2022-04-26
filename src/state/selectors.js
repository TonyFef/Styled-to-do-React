import { selector } from 'recoil';

import { todoItemsState, todoItemsFilterState } from './atoms';

export const filteredTodoItemsState = selector({
    key: 'filteredTodoItemsState',
    get: ({ get }) => {
        const filter = get(todoItemsFilterState);
        const items = get(todoItemsState);
        switch (filter) {
            case 'Groceries':
                return items.filter((item) => item.cathegory === 'Groceries');
            case 'College':
                return items.filter((item) => item.cathegory === 'College');
            case 'Payments':
                return items.filter((item) => item.cathegory === 'Payments');
            case 'All':
            default:
                return items;
        }
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
