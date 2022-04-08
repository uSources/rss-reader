import { createContext, useReducer } from 'react';
import { orderByKey } from '../utils/utils';

const initialState = {
  feedList: [],
};

const actions = {
  ADD_FEED_ITEMS: 'ADD_FEED_ITEMS',
  ORDER_ITEMS: 'ORDER_ITEMS',
};

//Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_FEED_ITEMS:
      return {
        feedList: [...action.feedItems],
      };
    case actions.ORDER_ITEMS:
      return {
        feedList: orderByKey({
          key: action.orderKey,
          array: state.feedList ?? [],
        }),
      };
    default:
      return state;
  }
};

const FeedListContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    feedList: state.feedList,
    addFeedItems: (feedItems) => {
      dispatch({ type: actions.ADD_FEED_ITEMS, feedItems: feedItems });
    },
    orderFeed: (orderKey) => {
      dispatch({ type: actions.ORDER_ITEMS, orderKey });
    },
  };

  return (
    <FeedListContext.Provider value={value}>
      {children}
    </FeedListContext.Provider>
  );
};

export default FeedListContext;
