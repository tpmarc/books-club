import { FunctionalComponent, h } from "preact"
import { Route, Router, RouterOnChangeArgs } from "preact-router"
import { Provider as StateProvider } from "react-redux"
import { Provider as RemoteProvider } from "use-http"

import Home from "../routes/home"
import Profile from "../routes/profile"
import NotFoundPage from "../routes/notfound"
import Books from "../routes/books"
import Book from "../routes/book"
import Header from "./header"
import store from "../store"

const App: FunctionalComponent = () => {
  let currentUrl: string
  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url
  }

  return (
    <RemoteProvider url="http://localhost:3000">
      <StateProvider store={store}>
        <Header />
        <Router onChange={handleRoute}>
          <Route path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/books/:id" component={Book} />
          <Route path="/profile/" component={Profile} user="me" />
          <Route path="/profile/:user" component={Profile} />
          <NotFoundPage default />
        </Router>
      </StateProvider>
    </RemoteProvider>
  )
}

export default App
