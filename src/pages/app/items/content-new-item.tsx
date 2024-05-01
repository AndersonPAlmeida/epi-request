import { zodResolver } from '@hookform/resolvers/zod'
import { Save } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const newItemFormSchema = z.object({
  nameItem: z.string().min(3, 'Informe um nome com mais de três caractteres.'),
  quantityStock: z
    .number({
      message:
        'Não deixe o campo em branco informe uma quantidade maior que 0. ',
    })
    .min(1, 'Informe uma quantidade maior que 0.'),
  equipes: z.array(z.string()).refine((value) => value.length > 0, {
    message: 'Você deve selecionar pelo menos um tipo de equipe.',
  }),
})

type NewItemForm = z.infer<typeof newItemFormSchema>

export function ContentNewItem() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewItemForm>({
    defaultValues: {
      nameItem: '',
      quantityStock: 1,
      equipes: [],
    },
    resolver: zodResolver(newItemFormSchema),
  })

  async function handleSaveItem(data: NewItemForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success(
        `Valores submetidos! ${(
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code>{JSON.stringify(data)}</code>
          </pre>
        )}`,
      )
      reset()
    } catch {
      console.error('Credenciais inválidas.')
    }
  }

  return (
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
          {errors.nameItem?.message !== '' ? (
            <span className="block text-red-500">
              {errors.nameItem?.message}
            </span>
          ) : (
            ''
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantityStock">Quantidade do item em estoque</Label>
          <Input
            id="quantityStock"
            type="number"
            placeholder="Informe a quantidade do item em estoque"
            {...register('quantityStock', { valueAsNumber: true })}
          />
          {errors.quantityStock?.message !== '' ? (
            <span className="block text-red-500">
              {errors.quantityStock?.message}
            </span>
          ) : (
            ''
          )}
        </div>

        <div className="space-y-2">
          <Label>Equipes</Label>
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
                              field.value?.filter((value) => value !== 'ccmlm'),
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
                              field.value?.filter((value) => value !== 'ccmlv'),
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
          {errors.equipes?.message !== '' ? (
            <span className="block text-red-500">
              {errors.equipes?.message}
            </span>
          ) : (
            ''
          )}
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant="success"
            className="w-full"
            disabled={isSubmitting}
          >
            <Save />
            Salvar Item
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
