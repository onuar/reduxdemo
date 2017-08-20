var { createStore, applyMiddleware } = require('redux');

const initUser = { name: "", age: 0 };
const userReducer = (state = initUser, action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            state = { ...state, name: action.payload };
            return state;
        case "UPDATE_AGE":
            state = { ...state, age: action.payload };
            return state;
        default:
            return state;
    }
};

const logger = (store) => (next) => (action) => {
    console.log(">>> An action is fired: ", action);
    next(action);
};

const error = (store) => (next) => (action) => {
    try {
        next(action);
    }
    catch (e) {
        console.log("Error occured and handled. Exception message is: ", e.message);
    }
};

const middleware = applyMiddleware(logger, error);

const store = createStore(userReducer, middleware);

store.subscribe(() => {
    console.log("<<< The store is changed", store.getState());
});

store.dispatch({ type: "UPDATE_NAME", payload: "Ahmet" });
store.dispatch({ type: "UPDATE_AGE", payload: 31 });
store.dispatch({ payload: "Onur" }); //there must be a type property.
store.dispatch({ type: "UPDATE_NAME", payload: "Onur" });