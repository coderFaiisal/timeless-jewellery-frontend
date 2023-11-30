"use client";

import * as z from "zod";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "password must be 6 characters",
  }),
});

type SignInFormValues = z.infer<typeof formSchema>;

const SignIn = () => {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-10 min-h-screen space-y-12">
      <div className="flex flex-col justify-center mx-auto w-full pb-12 md:pb-0 px-4 md:px-10 lg:px-20 border-[#81d8d0] border-b-[1px] md:border-b-0 md:border-r-[1px] ">
        <div className="mb-8 text-center md:text-left">
          <h1 className="my-1 text-2xl lg:text-3xl">Sign in</h1>
          <p className="text-sm font-light text-gray-600">
            Please sign in to your Timeless Account
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      placeholder="Email"
                      {...field}
                      className="w-full p-1 border-black border-b-[1px] outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      placeholder="Password"
                      {...field}
                      className="w-full p-1 border-black border-b-[1px] outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold bg-black hover:bg-[#81d8d0] text-white hover:text-black transition-all duration-300"
            >
              Sign in
            </button>
          </form>
          <p className="pt-4 text-xs hover:underline underline-offset-4 cursor-pointer">
            Forgot your password?
          </p>
        </Form>
      </div>

      <div className="px-4 md:px-12 lg:px-20 text-center md:text-left min-h-[250px]">
        <h1 className="text-2xl lg:text-3xl">Create an Account</h1>
        <p className="text-sm font-light my-2">
          Save time during checkout, view your shopping bag and saved items from
          any device and access your order history.
        </p>
        <Link href={"/signUp"}>
          <button
            type="button"
            className="w-full px-8 py-3 mt-4 font-semibold bg-black hover:bg-[#81d8d0] text-white hover:text-black transition-all duration-300"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
