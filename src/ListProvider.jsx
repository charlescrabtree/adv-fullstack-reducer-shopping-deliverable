import {
  createContext,
  useReducer,
} from 'react';
// import {
//   initialState,
//   reducer,
// } from '../reducers/shopping-list-item-reducer.js';
// import { reducerLogger } from '../reducers/reducer-logger.js';
import { reducerLogger } from './components/reducers/reducer-logger.js';
import { initialState,
  reducer,
} from './components/reducers/shopping-list-item-reducer.js';
export const Context = createContext({
  state: initialState(),
  reducer,
});

export const ItemListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducerLogger(reducer),
    initialState(),
  );
  const contextObj = { state, dispatch };
  return <Context.Provider value={ contextObj }>
    {children}
  </Context.Provider>;
};
