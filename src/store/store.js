import { usersReducer } from "./userSlice/userSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { postsReducer } from "./posts/postsSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'


  const persistConfig = {
    key: 'besamtInstagram',
    storage,
  }
  const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>{
        return [...getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          })]
    }

    },
   

)
export const persistor=persistStore(store)
export default store