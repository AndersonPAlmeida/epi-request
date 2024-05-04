import { zodResolver } from '@hookform/resolvers/zod'
import { Save } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const newTeamFormSchema = z.object({
  nameTeam: z.string().min(3, 'Informe um nome com mais de três caractteres.'),
})

type NewTeamForm = z.infer<typeof newTeamFormSchema>

export function ContentNewTeam() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewTeamForm>({
    defaultValues: {
      nameTeam: '',
    },
    resolver: zodResolver(newTeamFormSchema),
  })

  async function handleSaveTeam(data: NewTeamForm) {
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
        <DialogTitle>Nova equipe</DialogTitle>
      </DialogHeader>
      <form className="space-y-4" onSubmit={handleSubmit(handleSaveTeam)}>
        <div className="space-y-2">
          <Label htmlFor="nameTeam">Nome da equipe</Label>
          <Input
            id="nameTeam"
            placeholder="Informe o nome da equipe"
            {...register('nameTeam')}
          />
          {errors.nameTeam?.message !== '' ? (
            <span className="block text-red-500">
              {errors.nameTeam?.message}
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
            <Save className="mr-2 h-4 w-4" />
            Salvar Equipe
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
