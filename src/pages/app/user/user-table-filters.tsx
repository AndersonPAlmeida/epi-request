import { Eraser, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function UserTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Nome do Usuário" className="h-8 w-[200px]" />

      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[160px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas as equipes</SelectItem>
          <SelectItem value="ccm-lm">CCM LM</SelectItem>
          <SelectItem value="ccm-lv">CCM LV</SelectItem>
          <SelectItem value="stc">STC</SelectItem>
          <SelectItem value="leiturista">Leiturista</SelectItem>
        </SelectContent>
      </Select>

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
