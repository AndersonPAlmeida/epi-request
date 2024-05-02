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

import { ContentNewItem } from './content-new-item'
import { ItemTableRow } from './item-table-row'
import { ItemsTableFilters } from './items-table-filters'

export function Items() {
  return (
    <div className="space-y-5 p-5">
      <Helmet title="Itens" />
      <div className="flex">
        <h1 className="text-3xl font-bold tracking-tight">Items</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-auto w-40">
              <Plus />
              Novo Item
            </Button>
          </DialogTrigger>
          <ContentNewItem />
        </Dialog>
      </div>

      <ItemsTableFilters />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Identificador</TableHead>
              <TableHead>Nome do Item</TableHead>
              <TableHead className="w-[84px]">Qtd. em estoque</TableHead>
              <TableHead>Equipes que utilizam</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return <ItemTableRow key={i} />
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
