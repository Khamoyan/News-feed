import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import sourcesReducer from './reducer/sources'
import { connectRouter, routerMiddleware } from 'connected-react-router'
// import history from '../utils/history'
import articlesReducer from './reducer/articles'

  export default configureStore({
    reducer: {
      sources: sourcesReducer,
      articles: articlesReducer,
      // router: connectRouter(history),
      // routerMiddleware(history)
    }
  })