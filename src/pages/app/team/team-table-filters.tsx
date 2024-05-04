import { Eraser, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function TeamTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Nome da Equipe" className="h-8 w-[200px]" />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline" size="xs">
        <Eraser className="mr-2 h-4 w-4" />
        Limpar filtros
      </Button>
    </form>
  )
}
