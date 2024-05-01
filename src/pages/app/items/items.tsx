import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { ContentNewItem } from './content-new-item'
import { OrderTableFilters } from './order-table-filters'

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

      <div>
        <OrderTableFilters />
      </div>
    </div>
  )
}
