"use client";

import * as z from "zod";
import { ArrowBigRight } from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomImage from "./customImage";
import signUp from "@/assets/Sign-up.png";
import { Input } from "./ui/input";
import ImageUpload from "./imageUpload";
import { Button } from "./ui/button";
import Loader from "./loader";
import { Separator } from "./ui/separator";
import Link from "next/link";

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
  const [loading, setLoading] = useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log(data);
  };

  return (
    <div className="p-8 lg:p-16">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Create an Account
        </h2>
        <p className="text-sm text-muted-foreground">
          With a Timeless account, you can save time during checkout, access
          your shopping bag from any device and view your order history.
        </p>
        <div className="flex items-center mt-4 space-x-3 text-sm font-semibold ">
          <p>Already have a Timeless account?</p>
          <Link href={"/signIn"}>
            <Button variant={"outline"} className="flex items-center">
              Sign In <ArrowBigRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Separator className="my-6" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Image</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={loading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Phone Number"
                      {...field}
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Confirm password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {loading ? (
              <>
                Sign Up
                <Loader className="h-full w-full" />
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
