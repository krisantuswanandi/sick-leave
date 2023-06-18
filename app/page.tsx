import { format } from "date-fns"
import Item from "./Item"

const dates = [
  "1990-01-01",
]

export default function Home() {
  return (
    dates.map(date => <Item key={date} label={format(new Date(date), "dd MMM yyyy")} />)
  )
}
