"use client";

import * as Popover from "@radix-ui/react-popover";

export default function Item(props: { label: string }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="cursor-pointer rounded-md p-3 hover:bg-slate-900/75">
          <div className="h-1.5 w-1.5 rounded-sm bg-blue-900"></div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded-md border border-slate-800 px-3 py-2 text-sm uppercase text-slate-500 outline-none"
          side="top"
          sideOffset={4}
          alignOffset={4}
        >
          {props.label}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
