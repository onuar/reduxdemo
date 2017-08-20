# Redux demo
Demo project for my Medium article.

# Install
    npm install

# Run
    node index.js

# Hack and see!
1- make this changes:

    case "UPDATE_NAME":
    state.name = action.payload;
    return state;

2- 

    Remove initUser parameter.

3- Change whole reducer function and write this one:

    if (action.type === "UPDATE_USER") {
        state = {
            ...state,
            name: action.payload.name,
            age: action.payload.age
        };
    }