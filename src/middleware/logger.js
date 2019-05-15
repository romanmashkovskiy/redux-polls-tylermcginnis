export default (store) => (next) => (action) => {
    console.group(action.type);
    console.log(action);
    const result = next(action);
    console.log('New state', store.getState());
    console.groupEnd();

    return result;
};