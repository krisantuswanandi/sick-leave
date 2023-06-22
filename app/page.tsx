import fs from "fs"
import path from "path"
import { format } from "date-fns"
import Item from "./Item"
import AddItem from "./AddItem"

const data = fs.readFileSync(path.join(process.cwd(), "data") + "/items.txt", "utf8")
const dates = data.split("\n").slice(0, -1)

export default function Home() {
  async function addItem(password: string) {
    "use server"

    if (password !== process.env.USER_PASSWORD) {
      return false
    }

    const response = await fetch("https://api.github.com/repos/krisantuswanandi/sick-leave/actions/workflows/sick-leave.yml/dispatches", {
      method: "POST",
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({ ref: "main" }),
    })

    return response.ok
  }

  return (
    <div className="flex">
      {dates.map(date => <Item key={date} label={format(new Date(date), "dd MMM yyyy")} />)}
      <AddItem submit={addItem} />
    </div>
  )
}
