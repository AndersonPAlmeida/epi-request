import { ModeToggle } from './theme/mode-toggle'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="flex h-16 items-center gap-6 border-b px-6">
      <Button
        size="icon"
        variant="outline"
        className="group relative flex items-center justify-center"
      >
        <Separator
          orientation="horizontal"
          className="absolute top-2 h-[2px] w-5 transition duration-500 group-hover:top-4 group-hover:rotate-[225deg]"
        />
        <Separator
          orientation="horizontal"
          className="absolute top-4 h-[2px] w-5 transition duration-500 group-hover:opacity-0"
        />
        <Separator
          orientation="horizontal"
          className="absolute top-6 h-[2px] w-5 transition duration-500 group-hover:top-4 group-hover:rotate-[135deg]"
        />
      </Button>
      <div className="ml-auto flex items-center gap-2">
        <ModeToggle />
      </div>
    </div>
  )
}
