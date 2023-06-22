"use client"

import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Plus } from "lucide-react"

export default function AddItem(props: { submit: (password: string) => Promise<boolean> }) {
  const [open, setOpen] = useState(false)
  const [password, setPassword] = useState("")

  async function handleSubmit() {
    const result = await props.submit(password)

    if (result) {
      setPassword("")
      setOpen(false)
    } else {
      alert("Submit failed!!")
      setPassword("")
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="fixed bottom-6 left-1/2 w-12 h-12 translate-x-[-50%] flex justify-center items-center bg-slate-950 border border-slate-800 rounded-md text-slate-500 hover:bg-slate-900 outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-200/5 focus-visible:outline-4">
          <Plus />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-950/50 fixed inset-0 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] px-6 pb-6 rounded-md bg-slate-950 border border-slate-800 outline-none">
          <form action={handleSubmit}>
            <div className="py-10">
              <label htmlFor="password">
                Enter password:
              </label>
              <fieldset className="mt-2">
                <input
                  id="password"
                  type="password"
                  className="w-full text-xl py-1 px-4 bg-slate-950 border border-slate-800 rounded-md outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-200/5 focus-visible:outline-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="flex justify-end">
              <Dialog.Close asChild>
                <button className="px-4 py-1 mr-2 rounded-md text-slate-400 outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-300/25 focus-visible:outline-2" type="button">
                  Cancel
                </button>
              </Dialog.Close>
              <button className="bg-slate-200 hover:bg-slate-300 text-slate-950 px-4 py-1 rounded-md outline-none focus-visible:outline-offset-0 focus-visible:outline-blue-300/25 focus-visible:outline-4">
                Submit
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
