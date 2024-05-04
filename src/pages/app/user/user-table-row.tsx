import { PencilLine, Search, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TableCell, TableRow } from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function UserTableRow() {
  return (
    <TableRow>
      <TableCell className="font-mono text-xs font-medium">2585</TableCell>
      <TableCell className="text-xs font-medium">Anderson P.Almeida</TableCell>
      <TableCell className="text-xs font-medium">Assistente 1</TableCell>
      <TableCell className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="outline"
                size="xs"
                className="flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                <Separator orientation="vertical" className="h-5" />
                <PencilLine className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Visualizar | Editar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="destructive" size="xs">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Excluir</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
    </TableRow>
  )
}
