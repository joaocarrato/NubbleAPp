import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('E-mail obrigatório'),
  password: z.string().min(8, 'Mínimo 8 caracteres'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
