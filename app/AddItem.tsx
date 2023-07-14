"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

export default function AddItem(props: {
  submit: (password: string) => Promise<boolean>;
}) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    const result = await props.submit(password);

    if (result) {
      setPassword("");
      setOpen(false);
    } else {
      alert("Submit failed!!");
      setPassword("");
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="fixed bottom-6 left-1/2 flex h-12 w-12 translate-x-[-50%] items-center justify-center rounded-md border border-slate-800 bg-slate-950 text-slate-500 outline-none hover:bg-slate-900 focus-visible:outline-4 focus-visible:outline-offset-0 focus-visible:outline-blue-200/5">
          <Plus />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md border border-slate-800 bg-slate-950 px-6 pb-6 outline-none">
          <form action={handleSubmit}>
            <div className="py-10">
              <label htmlFor="password">Enter password:</label>
              <fieldset className="mt-2">
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-md border border-slate-800 bg-slate-950 px-4 py-1 text-xl outline-none focus-visible:outline-4 focus-visible:outline-offset-0 focus-visible:outline-blue-200/5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="flex justify-end">
              <Dialog.Close asChild>
                <button
                  className="mr-2 rounded-md px-4 py-1 text-slate-400 outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-300/25"
                  type="button"
                >
                  Cancel
                </button>
              </Dialog.Close>
              <button className="rounded-md bg-slate-200 px-4 py-1 text-slate-950 outline-none hover:bg-slate-300 focus-visible:outline-4 focus-visible:outline-offset-0 focus-visible:outline-blue-300/25">
                Submit
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
