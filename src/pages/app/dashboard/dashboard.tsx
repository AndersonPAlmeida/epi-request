import { Plus, Save } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const newItemForm = z.object({
  nameItem: z.string().min(3, 'Informe o nome corretamente'),
  quantityStock: z.number(),
  ccmlm: z.boolean(),
  ccmlv: z.boolean(),
  stc: z.boolean(),
  leiturista: z.boolean(),
})

type NewItemForm = z.infer<typeof newItemForm>

export function Dashboard() {
  const { register, handleSubmit, control } = useForm<NewItemForm>()

  function handleSaveItem(data: NewItemForm) {
    console.log(data)
  }

  return (
    <div className="flex flex-col p-5">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="ml-auto w-40">
            <Plus />
            Novo Item
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="border-b pb-4">
            <DialogTitle>Novo Item</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmit(handleSaveItem)}>
            <div className="space-y-2">
              <Label htmlFor="nameItem">Nome do item</Label>
              <Input
                id="nameItem"
                placeholder="Informe o nome do item"
                {...register('nameItem')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantityStock">
                Quantidade do item em estoque
              </Label>
              <Input
                id="quantityStock"
                type="number"
                placeholder="Informe a quantidade do item em estoque"
                {...register('quantityStock')}
              />
            </div>

            <div className="flex gap-2">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Checkbox {...register('ccmlm')} />
                  <Label>CCM LM</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Checkbox {...register('ccmlv')} />
                  <Label>CCM LV</Label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <Checkbox {...register('stc')} />
                  <Label>STC</Label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <Checkbox {...register('leiturista')} />
                  <Label>LEITURISTA</Label>
                </div>
              </div>
            </div>

            {/* <Controller
              control={control}
              name="teamsUsingTheItem"
              defaultValue={[]}
              render={({ field: { onChange } }) => {
                return (
                  <>
                    <div className="flex gap-4">
                      <div className="flex gap-2">
                        <Checkbox value="ccm-lm" {...register('teamsUsingTheItem')} />
                        <Label>CCM LM</Label>
                      </div>
                      <div className="flex gap-2">
                        <Checkbox
                          value="ccm-lv"
                          {...register('teamsUsingTheItem')}
                        />
                        <Label>CCM LV</Label>
                      </div>
                      <div className="flex gap-2">
                        <Checkbox
                          value="stc"
                          {...register('teamsUsingTheItem')}
                        />
                        <Label>STC</Label>
                      </div>
                      <div className="flex gap-2">
                        <Checkbox
                          value="leiturista"
                          {...register('teamsUsingTheItem')}
                        />
                        <Label>Leiturista</Label>
                      </div>
                    </div>
                  </>
                )
              }}
            /> */}

            <DialogFooter>
              <Button type="submit" variant="success" className="w-full">
                <Save />
                Salvar Item
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
