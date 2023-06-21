import fs from "fs"
import path from "path"
import { format } from "date-fns"
import Item from "./Item"

const data = fs.readFileSync(path.join(process.cwd(), "data") + "/items.txt", "utf8")
const dates = data.split("\n").slice(0, -1)

export default function Home() {
  return (
    dates.map(date => <Item key={date} label={format(new Date(date), "dd MMM yyyy")} />)
  )
}
