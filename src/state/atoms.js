import { atom } from 'recoil';

export const todoItemsState = atom({
    key: 'todoItemsState',
    default: [
        { id: 1, text: 'Get a new helmet', isComplete: false, cathegory: 'Uncategorized' },
        { id: 2, text: 'Purchase Milk & Corn Flakes', isComplete: false, cathegory: 'Groceries' },
        { id: 3, text: 'Pay mortgage', isComplete: false, cathegory: 'Payments' },
        { id: 4, text: 'Complete Assignments', isComplete: false, cathegory: 'College' },
        { id: 5, text: 'Replace laptop’s screen', isComplete: false, cathegory: 'Uncategorized' },
    ],
});

export const todoItemsFilterState = atom({
    key: 'todoItemsFilterState',
    default: 'All',
});
