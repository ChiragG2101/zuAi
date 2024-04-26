"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Control, FieldValues, FormProps as FormType } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";

interface IFormTextInputProps {
  form: any;
  formName: string;
  label: string;
  placeholder: string;
  required?: boolean;
  defaultValue?: string;
  type?: "text" | "email";
  className?: string;
}
const FormTextInput = ({
  form,
  formName,
  label,
  placeholder,
  required = false,
  defaultValue,
  type,
  className,
}: IFormTextInputProps) => {
  return (
    <FormField
      control={form?.control}
      name={formName}
      render={({ field }) => (
        <FormItem
          className={cn("w-full  flex flex-col justify-between ", className)}
        >
          <FormLabel className="text-sm font-medium text-black ">
            {label}
            {required && <span className="text-destructive">*</span>}
          </FormLabel>
          <FormControl className="self-end">
            <Input
              type={type ?? "text"}
              placeholder={placeholder}
              {...field}
              value={defaultValue || field.value || ""}
              className="text-sm border border-gray-300 placeholder:text-muted-foreground bg-white "
              onChange={(e) => {
                e.preventDefault();
                field.onChange(e.target.value);
                form.trigger(formName);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignUpForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const handleSignUp = async (data: z.infer<typeof signUpSchema>) => {
    try {
      const response = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const { user } = await response.json();

      if (user) {
        form.setError("email", { message: "User already exists" });
        return;
      }

      const res = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/login");
        form.reset();
      } else {
        console.log("user sign up failed");
      }
    } catch (error) {}
  };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            action=""
            className="flex flex-col gap-4 items-center  w-full"
            onSubmit={form.handleSubmit(handleSignUp)}
          >
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <FormTextInput
                  form={form}
                  formName="firstName"
                  label="First Name"
                  placeholder="Enter first name"
                  required
                />
                <FormTextInput
                  form={form}
                  formName="lastName"
                  label="Last Name"
                  placeholder="Enter last name"
                />
              </div>
              <div className="grid gap-2">
                <FormTextInput
                  form={form}
                  formName="email"
                  label="Email"
                  placeholder="name@company.com"
                  type="email"
                  required
                />
              </div>
              <FormField
                control={form.control}
                name={"password"}
                render={({ field }) => (
                  <FormItem
                    className={cn("w-full  flex flex-col justify-between ")}
                  >
                    <div className="flex gap-2 justify-between">
                      <FormLabel className="text-sm font-medium text-black ">
                        {"Password"}
                        {<span className="text-destructive">*</span>}
                      </FormLabel>
                    </div>
                    <div className="relative">
                      <FormControl className="self-end ">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder={"Enter password"}
                          {...field}
                          value={field.value || ""}
                          className="text-sm border border-gray-300 placeholder:text-muted-foreground bg-white"
                          onChange={(e) => {
                            e.preventDefault();
                            field.onChange(e.target.value);
                            form.trigger("password");

                            if (!(e.target.value.length > 0)) {
                              setShowPassword(false);
                            }
                          }}
                        />
                      </FormControl>
                      {form.getValues("password") ? (
                        showPassword ? (
                          <EyeSlashIcon
                            className="w-4 h-4 absolute right-3 top-2.5 text-muted-foreground disabled:cursor-not-allowed"
                            onClick={() => setShowPassword(false)}
                          />
                        ) : (
                          <EyeIcon
                            className="w-4 h-4 absolute right-3 top-2.5 text-muted-foreground disabled:cursor-not-allowed"
                            onClick={() => setShowPassword(true)}
                          />
                        )
                      ) : null}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
