import { ModeToggle } from './theme/mode-toggle'

export function Header() {
  return (
    <div className="flex h-16 items-center gap-6 border-b px-6">
      <div className="ml-auto flex items-center gap-2">
        <ModeToggle />
      </div>
    </div>
  )
}
