import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email({ message: 'Ingresa un correo valido' }),
});

export const registerSchema = z.object({
	name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
	email: z.string().email({ message: 'Ingresa un correo valido' }),
	phone: z
		.string()
		.regex(/^\+\d{1,3}\d{9}$/, { message: 'Ingrese un telefono valido con el formato +212 ****' })
		.min(10, { message: 'El telefono debe tener al menos 9 digitos' }),
});