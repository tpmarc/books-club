import { RootState } from "src/store"
import { booksAdapter } from "../entity-adapters"

export const selectAllBooksSelector = booksAdapter.getSelectors<RootState>(
  state => state.books
).selectAll

export const selectBookSelector = booksAdapter.getSelectors<RootState>(
  state => state.books
).selectById

export const selectTotalBooksSelector = booksAdapter.getSelectors<RootState>(
  state => state.books
).selectTotal
