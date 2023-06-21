"use client"

import * as Popover from "@radix-ui/react-popover"

export default function Item(props: { label: string }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="p-3 hover:bg-slate-900/75 rounded-md">
          <div className="bg-blue-900 w-1.5 h-1.5 rounded-sm"></div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="px-3 py-2 border border-slate-800 text-slate-500 rounded-md text-sm uppercase outline-none"
          side="top"
          sideOffset={4}
          alignOffset={4}
        >
          { props.label }
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
