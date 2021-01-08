import { FunctionalComponent, h } from "preact"
import { Link } from "preact-router/match"
import { useEffect, useRef } from "preact/hooks"
import useFetch from "use-http"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { BookModel } from "../../store/entity-adapters"
import {
  selectAllBooksSelector,
  selectTotalBooksSelector
} from "../../store/selectors"
import { addBook, addBooks, removeBook } from "../../store/slices/books"

const Books: FunctionalComponent = () => {
  const dispatch = useDispatch()
  const books = useSelector<RootState, BookModel[]>(selectAllBooksSelector)
  const totalBooks = useSelector<RootState, number>(selectTotalBooksSelector)

  const formRef = useRef<HTMLFormElement>()
  const inputRef = useRef<HTMLInputElement>()

  const { get, post, response, loading, error } = useFetch()

  useEffect(() => {
    loadInitialBooks()
  }, [])

  async function loadInitialBooks() {
    const initialBooks = await get("/books")
    if (response.ok) dispatch(addBooks(initialBooks))
  }

  async function handleSubmit(e: Event) {
    e?.preventDefault()

    const book = { id: totalBooks + 1, title: inputRef.current.value }
    const newBook = await post("/books", book)
    if (response.ok) dispatch(addBook(newBook))

    formRef.current.reset()
  }

  return (
    <div>
      <h1>Books</h1>
      <p>You have a total of {totalBooks} Book(s)</p>

      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>

      {loading && <span>Loading list of Books...</span>}

      {error && <span>Oops... Something went wrong :(</span>}

      <ul>
        {books.map((book: BookModel) => (
          <li>
            <Link href={`/books/${book?.id}`}>{book.title}</Link>

            <button onClick={() => dispatch(removeBook(book.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Books
