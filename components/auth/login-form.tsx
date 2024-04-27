"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res: any = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res.error) {
        form.setError("email", { message: "Invalid credentials" });
        form.setError("password", { message: "Invalid credentials" });
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form
            action=""
            className="flex flex-col gap-4 items-center w-full"
            onSubmit={form.handleSubmit(handleLogin)}
          >
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem
                  className={cn("w-full  flex flex-col justify-between ")}
                >
                  <div className="flex gap-2 justify-between">
                    <FormLabel className="text-sm font-medium text-black ">
                      {"Email"}
                      {<span className="text-destructive">*</span>}
                    </FormLabel>
                  </div>
                  <FormControl className="self-end">
                    <Input
                      type={"email"}
                      placeholder={"name@company.com"}
                      {...field}
                      value={field.value || ""}
                      className="text-sm border border-gray-300 placeholder:text-muted-foreground bg-white"
                      onChange={(e) => {
                        e.preventDefault();
                        field.onChange(e.target.value);

                        if (!(e.target.value.length > 0)) {
                          setShowPassword(false);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <div className="flex flex-col w-full">
              <Button
                className="w-full mt-4"
                disabled={form.formState.isSubmitting}
              >
                Sign in
              </Button>
              <div className="mt-4 text-center text-sm">
                Don&rsquo;t have an account?{" "}
                <Link href="/sign-up" className="underline">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
