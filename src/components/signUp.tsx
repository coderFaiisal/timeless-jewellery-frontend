"use client";

import * as z from "zod";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z
  .object({
    name: z
      .string({ required_error: "name is required" })
      .min(3, { message: "name at least 3 characters" }),
    email: z.string().email(),
    password: z
      .string({ required_error: "password is required" })
      .min(6, { message: "password must be 6 or more long" }),
    confirmPassword: z.string({
      required_error: "confirm password is required",
    }),
    phoneNumber: z.string({ required_error: "phone number is required" }),
    image: z.string({ required_error: "image is required" }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Confirm passwords does not match!",
      path: ["confirmPassword"],
    }
  );

type SignInFormValues = z.infer<typeof formSchema>;

const SignUp = () => {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
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

      <div className="px-4 md:px-12 lg:px-20 text-center md:text-left min-h-[250px]"></div>
    </div>
  );
};

export default SignUp;
