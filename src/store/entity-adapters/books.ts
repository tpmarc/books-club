import { createEntityAdapter } from "@reduxjs/toolkit"

export type BookModel = {
  id: number
  title: string
}

export const booksAdapter = createEntityAdapter<BookModel>()
