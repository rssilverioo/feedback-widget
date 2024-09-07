import { ChatTeardropDots } from "phosphor-react"
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidgetForm"

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button 
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center hover:bg-brand-300 transition-all ease-linear"
      >
        <ChatTeardropDots className="w-6 h-6" />

        
      </Popover.Button>
    </Popover>
  )
}