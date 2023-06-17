import { format } from "date-fns"
import Item from "./Item"

const dates = [
  "2023-06-15",
  "2023-06-16",
  "2023-06-17",
]

export default function Home() {
  return (
    dates.map(date => <Item key={date} label={format(new Date(date), "dd MMM yyyy")} />)
  )
}
