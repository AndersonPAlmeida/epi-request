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
  equipes: z.array(z.string()).refine((value) => value.length > 0, {
    message: 'You have to select at least one item.',
  }),
})

type NewItemForm = z.infer<typeof newItemForm>

export function Dashboard() {
  const { register, handleSubmit, control } = useForm<NewItemForm>({
    defaultValues: {
      nameItem: '',
      quantityStock: 0,
      equipes: [],
    },
  })

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
              <Controller
                name="equipes"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-2">
                      <Checkbox
                        checked={field.value?.includes('ccmlm')}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, 'ccmlm'])
                            : field.onChange(
                                field.value?.filter(
                                  (value) => value !== 'ccmlm',
                                ),
                              )
                        }}
                      />
                      <Label>CCM LM</Label>
                    </div>
                  )
                }}
              />

              <Controller
                name="equipes"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-2">
                      <Checkbox
                        checked={field.value?.includes('ccmlv')}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, 'ccmlv'])
                            : field.onChange(
                                field.value?.filter(
                                  (value) => value !== 'ccmlv',
                                ),
                              )
                        }}
                      />
                      <Label>CCM LV</Label>
                    </div>
                  )
                }}
              />

              <Controller
                name="equipes"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-2">
                      <Checkbox
                        checked={field.value?.includes('stc')}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, 'stc'])
                            : field.onChange(
                                field.value?.filter((value) => value !== 'stc'),
                              )
                        }}
                      />
                      <Label>STC</Label>
                    </div>
                  )
                }}
              />

              <Controller
                name="equipes"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex gap-2">
                      <Checkbox
                        checked={field.value?.includes('leiturista')}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, 'leiturista'])
                            : field.onChange(
                                field.value?.filter(
                                  (value) => value !== 'leiturista',
                                ),
                              )
                        }}
                      />
                      <Label>LEITURISTA</Label>
                    </div>
                  )
                }}
              />
            </div>
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
