import { PencilLine, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function TeamTableRow() {
  return (
    <TableRow>
      <TableCell className="font-mono text-xs font-medium">
        821e78f7asdhdf128h
      </TableCell>
      <TableCell className="text-xs font-medium">STC</TableCell>
      <TableCell className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline" size="xs">
                <PencilLine className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Editar</p>
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
