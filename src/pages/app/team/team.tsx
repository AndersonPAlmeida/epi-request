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

import { ContentNewTeam } from './content-new-team'
import { TeamTableFilters } from './team-table-filters'
import { TeamTableRow } from './team-table-row'

export function Team() {
  return (
    <div className="space-y-5 p-5">
      <Helmet title="Equipe" />
      <div className="flex">
        <h1 className="text-3xl font-bold tracking-tight">Equipes</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-50 ml-auto">
              <Plus className="mr-2 h-4 w-4" />
              Nova Equipe
            </Button>
          </DialogTrigger>
          <ContentNewTeam />
        </Dialog>
      </div>

      <TeamTableFilters />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Identificador</TableHead>
              <TableHead>Nome da Equipe</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return <TeamTableRow key={i} />
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
