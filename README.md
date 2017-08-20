# Redux demo
Demo project for my Medium article. (https://medium.com/@onuraykac/i%CC%87pin-ucunu-ka%C3%A7%C4%B1rmamak-redux-8d822da0d19b)

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