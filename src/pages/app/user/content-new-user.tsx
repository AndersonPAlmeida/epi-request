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

const newUserFormSchema = z.object({
  nameUser: z.string().min(3, 'Informe um nome com mais de três caracteres.'),
  registration: z
    .number({
      message: 'Não deixe o campo em branco informe a matrícula. ',
    })
    .min(4, 'Informe uma quantidade maior que 3 dígitos.'),
  telephone: z
    .string()
    .min(13, 'Informe a quantidade de dígitos correta para salvar o telefone.')
    .max(13, 'Informe a quantidade de dígitos correta para salvar o telefone.'),
  email: z.string().email(),
  password: z
    .string()
    .min(4, 'Informe uma quantidade maior que 3 dígitos.')
    .max(10, 'Informe uma quantidade menor que 11 dígitos.'),
  job: z.string(),
})

type NewUserForm = z.infer<typeof newUserFormSchema>

export function ContentNewUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewUserForm>({
    defaultValues: {
      nameUser: '',
      registration: 0,
      telephone: '',
      email: '',
      password: '',
      job: '',
    },
    resolver: zodResolver(newUserFormSchema),
  })

  async function handleSaveUser(data: NewUserForm) {
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
        <DialogTitle>Novo Usuário</DialogTitle>
      </DialogHeader>
      <form className="space-y-4" onSubmit={handleSubmit(handleSaveUser)}>
        <div className="space-y-2">
          <Label htmlFor="nameUser">Nome do usuário</Label>
          <Input
            id="nameUser"
            placeholder="Informe o nome do usuário"
            {...register('nameUser')}
          />
          {errors.nameUser?.message !== '' ? (
            <span className="block text-red-500">
              {errors.nameUser?.message}
            </span>
          ) : (
            ''
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="registration">Matrícula</Label>
          <Input
            id="registration"
            type="number"
            placeholder="Informe a quantidade do esquipamento em estoque"
            {...register('registration', { valueAsNumber: true })}
          />
          {errors.registration?.message !== '' ? (
            <span className="block text-red-500">
              {errors.registration?.message}
            </span>
          ) : (
            ''
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="nameUser">Telefone</Label>
          <Input
            id="telephone"
            type="tel"
            placeholder="Informe o telefone do usuário"
            {...register('telephone')}
          />
          {errors.telephone?.message !== '' ? (
            <span className="block text-red-500">
              {errors.telephone?.message}
            </span>
          ) : (
            ''
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="Informe o e-mail do usuário"
            {...register('email')}
          />
          {errors.email?.message !== '' ? (
            <span className="block text-red-500">{errors.email?.message}</span>
          ) : (
            ''
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="job">Função</Label>
          <Input
            id="job"
            placeholder="Informe a função do usuário"
            {...register('job')}
          />
          {errors.job?.message !== '' ? (
            <span className="block text-red-500">{errors.job?.message}</span>
          ) : (
            ''
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Informe a senha do usuário"
            {...register('password')}
          />
          {errors.password?.message !== '' ? (
            <span className="block text-red-500">
              {errors.password?.message}
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
            Salvar Usuário
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
