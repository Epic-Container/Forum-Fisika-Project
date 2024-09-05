"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import Link from 'next/link'

const dataValidate = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
type formDataValidate = z.infer<typeof dataValidate>;

const Auth: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<formDataValidate>({
    resolver: zodResolver(dataValidate),
  });
  const submit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-4 flex-col w-[400px] items-center secondary-dark rounded-xl py-5 px-10">
        <div className="flex flex-col items-center w-full border-b-2 border-stone-400">
          <h1 className="text-3xl pb-2">Wellcome back</h1>
        </div>
        <div className="w-full">
          <form className="flex flex-col gap-4">
            <label htmlFor="email">
              <h1>Email</h1>
              <input
                type="email"
                id="email"
                className="w-full border-2 p-2 secondary-dark rounded-xl"
                {...register('email')}
              />
              { formState.errors?.email && <p className="text-red-500">{formState.errors.email.message}</p> }
            </label>
            <label htmlFor="password">
              <h1>Password</h1>
              <input
                type="password"
                id="password"
                className="w-full border-2 p-2 secondary-dark rounded-xl"
                {...register('password')}
              />
              { formState.errors?.password && <p className="text-red-500">{formState.errors.password.message}</p> }
            </label>
          </form>
        </div>
        <div className="pt-3 w-full flex flex-col gap-3 items-center">
          <button onClick={submit} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Login
          </button>
          <Link href="signup" className="text-sm text-blue-800 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Auth;