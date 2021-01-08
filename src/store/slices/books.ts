import { createSlice } from "@reduxjs/toolkit"
import { booksAdapter } from "../entity-adapters"

export const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState(),
  reducers: {
    addBook: booksAdapter.addOne,
    addBooks: booksAdapter.addMany,
    removeBook: booksAdapter.removeOne,
    updateBook: booksAdapter.updateOne
  }
})

export const { addBook, addBooks, removeBook } = booksSlice.actions
