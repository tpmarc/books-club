import { useDispatch } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { booksSlice } from "./slices"

const store = configureStore({
  reducer: {
    books: booksSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
