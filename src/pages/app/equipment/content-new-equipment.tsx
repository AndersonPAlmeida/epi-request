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

const newEquipmentFormSchema = z.object({
  nameEquipment: z
    .string()
    .min(3, 'Informe um nome com mais de três caractteres.'),
  quantityStock: z
    .number({
      message:
        'Não deixe o campo em branco informe uma quantidade maior que 0. ',
    })
    .min(1, 'Informe uma quantidade maior que 0.'),
  team: z.array(z.string()).refine((value) => value.length > 0, {
    message: 'Você deve selecionar pelo menos um tipo de equipe.',
  }),
})

type NewEquipmentForm = z.infer<typeof newEquipmentFormSchema>

export function ContentNewEquipment() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewEquipmentForm>({
    defaultValues: {
      nameEquipment: '',
      quantityStock: 1,
      team: [],
    },
    resolver: zodResolver(newEquipmentFormSchema),
  })

  async function handleSaveEquipment(data: NewEquipmentForm) {
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
        <DialogTitle>Novo Equipamento</DialogTitle>
      </DialogHeader>
      <form className="space-y-4" onSubmit={handleSubmit(handleSaveEquipment)}>
        <div className="space-y-2">
          <Label htmlFor="nameEquipment">Nome do equipamento</Label>
          <Input
            id="nameEquipment"
            placeholder="Informe o nome do equipamento"
            {...register('nameEquipment')}
          />
          {errors.nameEquipment?.message !== '' ? (
            <span className="block text-red-500">
              {errors.nameEquipment?.message}
            </span>
          ) : (
            ''
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantityStock">
            Quantidade do equipamento em estoque
          </Label>
          <Input
            id="quantityStock"
            type="number"
            placeholder="Informe a quantidade do esquipamento em estoque"
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
              name="team"
              control={control}
              render={({ field }) => {
                return (
                  <div className="flex gap-2">
                    <Checkbox
                      id="ccm-lm"
                      checked={field.value?.includes('ccm-lm')}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, 'ccm-lm'])
                          : field.onChange(
                              field.value?.filter(
                                (value) => value !== 'ccm-lm',
                              ),
                            )
                      }}
                    />
                    <Label htmlFor="ccm-lm">CCM LM</Label>
                  </div>
                )
              }}
            />

            <Controller
              name="team"
              control={control}
              render={({ field }) => {
                return (
                  <div className="flex gap-2">
                    <Checkbox
                      id="ccm-lv"
                      checked={field.value?.includes('ccm-lv')}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, 'ccm-lv'])
                          : field.onChange(
                              field.value?.filter(
                                (value) => value !== 'ccm-lv',
                              ),
                            )
                      }}
                    />
                    <Label htmlFor="ccm-lv">CCM LV</Label>
                  </div>
                )
              }}
            />

            <Controller
              name="team"
              control={control}
              render={({ field }) => {
                return (
                  <div className="flex gap-2">
                    <Checkbox
                      id="stc"
                      checked={field.value?.includes('stc')}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, 'stc'])
                          : field.onChange(
                              field.value?.filter((value) => value !== 'stc'),
                            )
                      }}
                    />
                    <Label htmlFor="stc">STC</Label>
                  </div>
                )
              }}
            />

            <Controller
              name="team"
              control={control}
              render={({ field }) => {
                return (
                  <div className="flex gap-2">
                    <Checkbox
                      id="leiturista"
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
                    <Label htmlFor="leiturista">LEITURISTA</Label>
                  </div>
                )
              }}
            />
          </div>
          {errors.team?.message !== '' ? (
            <span className="block text-red-500">{errors.team?.message}</span>
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
            <Save className="mr-2 h-4 w-4" />
            Salvar Equipamento
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
