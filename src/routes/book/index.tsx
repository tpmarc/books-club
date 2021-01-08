import { FunctionalComponent, h } from "preact"
import { useSelector } from "react-redux"
import { BookModel } from "../../store/entity-adapters"
import { RootState } from "../../store"
import { selectBookSelector } from "../../store/selectors"

interface Props {
  id: string
}

const Book: FunctionalComponent<Props> = (props: Props) => {
  const { id } = props
  const book = useSelector<RootState, BookModel | undefined>(state =>
    selectBookSelector(state, id)
  )

  return (
    <div>
      <h1>{book?.title}</h1>
    </div>
  )
}

export default Book
