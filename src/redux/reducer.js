const UPDATE_COUNT = 'UPDATE_COUNT';

const initState = {
  count: 1,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_COUNT: {
      return {
        count: action.payload.count,
      };
    }
    default:
      return state;
  }
};

export {
  reducer
}