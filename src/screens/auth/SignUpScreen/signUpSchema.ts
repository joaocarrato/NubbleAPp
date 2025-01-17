import { z } from 'zod';

export const signUpSchema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z0-9_]{3,30}$/, 'Username inválido')
    .toLowerCase(),
  fullName: z
    .string()
    .min(3, 'Nome muito curto')
    .max(50, 'Nome muito longo')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),

  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Mínimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
