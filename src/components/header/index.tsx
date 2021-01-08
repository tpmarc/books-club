import { FunctionalComponent, h } from "preact"
import { Link } from "preact-router/match"

const Header: FunctionalComponent = () => {
  return (
    <div>
      <h1>Preact App</h1>
      <nav>
        <Link activeClassName="" href="/">
          Home
        </Link>
        <Link activeClassName="" href="/books">
          Books
        </Link>
        <Link activeClassName="" href="/profile">
          Me
        </Link>
        <Link activeClassName="" href="/profile/john">
          John
        </Link>
      </nav>
    </div>
  )
}

export default Header
