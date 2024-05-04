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

import { ContentNewUser } from './content-new-user'
import { UserTableFilters } from './user-table-filters'
import { UserTableRow } from './user-table-row'

export function User() {
  return (
    <div className="space-y-5 p-5">
      <Helmet title="Usuário" />
      <div className="flex">
        <h1 className="text-3xl font-bold tracking-tight">Usuário</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-50 ml-auto">
              <Plus className="mr-2 h-4 w-4" />
              Novo Usuário
            </Button>
          </DialogTrigger>
          <ContentNewUser />
        </Dialog>
      </div>

      <UserTableFilters />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Matricula</TableHead>
              <TableHead>Nome do usuário</TableHead>
              <TableHead>Função</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return <UserTableRow key={i} />
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
