import { createStore } from 'redux';
// import './dispatcher';

//Action Generators
const incrementer = ({incrementBy=1}) => ({
    type: 'CNT_INCREMENT',
    incrementBy,
});

const decrementer = ({decrementBy=1}) => ({
    type: 'CNT_DECREMENT',
    decrementBy,
});

const setter = ({count}) => ({
    type: 'CNT_SET',
    count,
    validator: () => {
        if (!count) throw Error('Required property "Count" is missing, did you misspell it?')
    },
});

const resetter = () => ({
    type: 'CNT_RESET',
    count: 0,
});

//Reducers
//Reducers are pure functions : functions that compute o/p based on i/p, do not interact with anything outside its scope

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'CNT_INCREMENT':
            return { count: state.count + action.incrementBy };
            break;

        case 'CNT_DECREMENT':
            return { count: state.count - action.decrementBy };
            break;

        case 'CNT_RESET':
            return { count: action.count };
            break;

        case 'CNT_SET':
            action.validator;
            return { count: action.count };
            break;

        default:
            return state;
            break;
    }
};

const store = createStore(countReducer);

//Subscriber
store.subscribe(() => {
    console.log(store.getState());
});

//Dispatchers
store.dispatch(incrementer({ incrementBy:4654 }));
store.dispatch(decrementer({ decrementBy:46545 }));
store.dispatch(setter());
store.dispatch(resetter());