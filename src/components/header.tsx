import { HardHat } from 'lucide-react'

import { ModeToggle } from './theme/mode-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <HardHat className="h-6 w-6" />
        <Separator orientation="vertical" className="h-10" />

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
