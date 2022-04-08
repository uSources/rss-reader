import { createContext, useReducer } from 'react';
import { orderByKey } from '../utils/utils';

const initialState = {
  feedList: [],
};

const actions = {
  ADD_FEED_ITEMS: 'ADD_FEED_ITEMS',
  TOGGLE_READ: 'TOGGLE_READ',
  ORDER_ITEMS: 'ORDER_ITEMS',
  REMOVE_LIST: 'REMOVE_LIST',
};

//Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_FEED_ITEMS:
      return {
        feedList: [...action.feedItems],
      };
    case actions.TOGGLE_READ: {
      const updatedFeedList = state.feed.map((feedItem) =>
        feedItem.guid === action.guid
          ? { ...feedItem, isRead: !feedItem.isRead }
          : feedItem
      );
      return { feedList: updatedFeedList };
    }
    case actions.ORDER_ITEMS:
      return {
        feedList: orderByKey({
          key: action.orderKey,
          array: state.feedList ?? [],
        }),
      };
    case actions.REMOVE_LIST:
      return {
        feedList: [],
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
    removeList: () => {
      dispatch({ type: actions.REMOVE_LIST });
    },
    addFeedItems: (feedItems) => {
      dispatch({ type: actions.ADD_FEED_ITEMS, feedItems: feedItems });
    },
    markAsRead: (feedItem) => {
      dispatch({ type: actions.TOGGLE_READ, feedItem });
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
