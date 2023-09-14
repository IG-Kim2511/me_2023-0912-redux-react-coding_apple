import { configureStore } from '@reduxjs/toolkit'
import { counter_Reducer } from './reducer/counterSlice'



export default configureStore({
  reducer: {
    counter: counter_Reducer,
  },
})