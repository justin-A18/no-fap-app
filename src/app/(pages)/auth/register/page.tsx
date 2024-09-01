'use client';

import { registerSchema } from '@/app/_schemas/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/_components/ui/form';

import { useAuthMutation } from '@/app/_hooks/auth/useAuthMutation';
import { LoadingButton } from '@/app/_components/shared/buttons';
import { TypographyH1 } from '@/app/_components/typography';
import { CustomAlert } from '@/app/_components/shared/alerts';
import { Input } from '@/app/_components/ui/input';
import { Mail } from 'lucide-react';
import { useStore } from '@/app/_providers';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RegisterPage = () => {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
		},
	});

	const { registerMutation } = useAuthMutation();
	const { user } = useStore();

	const router = useRouter();

	function onSubmit(values: z.infer<typeof registerSchema>) {
		registerMutation.mutate(values);
		router.push('/no-fap');
	}

	useEffect(() => {
		if (user && user.name !== "") {
			router.push('/no-fap');
		}
	}, [user]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-4 w-full'
				data-testid='login-form'>
				<TypographyH1 className='text-center text-3xl font-bold'>
					Registrarse
				</TypographyH1>

				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre</FormLabel>
							<FormControl>
								<Input
									type='text'
									placeholder='pajero loco'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Telefóno</FormLabel>
							<FormControl>
								<Input
									type='tel'
									placeholder='+51 992322333'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Correo Electrónico</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='ejemplo@nofap.com'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<LoadingButton
					variant='custom'
					type='submit'
					size='lg'
					isLoading={false}>
					<Mail /> Registrarse
				</LoadingButton>
			</form>
		</Form>
	);
};

export default RegisterPage;
