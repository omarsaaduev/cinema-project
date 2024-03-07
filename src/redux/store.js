import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './movieSlice.js';

const store = configureStore({
  reducer: rootReducer,
});
 
export default store;


// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import movieReducer from './movieSlice.js';
// import { 
//   persistStore, 
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//  } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
// const rootReducer = combineReducers({
//   movies: movieReducer
// })
 
// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// const persistedReducer = persistReducer(persistConfig, rootReducer)


// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store)
// export default store;
