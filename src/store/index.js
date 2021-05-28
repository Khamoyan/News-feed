import { configureStore } from '@reduxjs/toolkit'
import sourcesReducer from './reducer/sources'
import articlesReducer from './reducer/articles'

  export default configureStore({
    reducer: {
      sources: sourcesReducer,
      articles: articlesReducer,
    }
  })