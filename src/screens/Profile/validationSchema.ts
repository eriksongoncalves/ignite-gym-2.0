import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const profileFormSchema = z.object({
  name: z.string({ message: 'Campo obrigatório' }).min(1, 'Campo obrigatório'),
  email: z
    .string({ message: 'Campo obrigatório' })
    .min(1, 'E-mail obrigatório')
    .email('E-mail inválido'),
  old_password: z
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório'),
  new_password: z
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório')
})

export type ProfileFormData = z.infer<typeof profileFormSchema>

export const profileFormResolver = zodResolver(profileFormSchema)
