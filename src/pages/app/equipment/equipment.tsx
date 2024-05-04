import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ContentNewEquipment } from './content-new-equipment'
import { EquipmentTableFilters } from './equipment-table-filters'
import { EquipmentTableRow } from './equipment-table-row'

export function Equipment() {
  return (
    <div className="space-y-5 p-5">
      <Helmet title="Equipamento" />
      <div className="flex">
        <h1 className="text-3xl font-bold tracking-tight">Equipamento</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-50 ml-auto">
              <Plus className="mr-2 h-4 w-4" />
              Novo Equipamento
            </Button>
          </DialogTrigger>
          <ContentNewEquipment />
        </Dialog>
      </div>

      <EquipmentTableFilters />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Identificador</TableHead>
              <TableHead>Nome do Equipamento</TableHead>
              <TableHead className="w-[84px]">Qtd. em estoque</TableHead>
              <TableHead>Equipes que utilizam</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return <EquipmentTableRow key={i} />
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
