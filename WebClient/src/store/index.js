import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import rootEpic from '../epics';
const epicMiddleware = createEpicMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(epicMiddleware),
);
export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  epicMiddleware.run(rootEpic);
  return store;
}