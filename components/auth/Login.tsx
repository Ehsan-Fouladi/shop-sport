"use client";

import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import AuthFormLayout from "./AuthFormLayout";
import * as z from "zod";

type LoginProps = {
  onNext: (identifier: string) => void;
};

const formLoginSchema = z.object({
  identifier: z.string().superRefine((value, ctx) => {
    if (value.includes("@")) {
      const result = z.email().safeParse(value);
      if (!result.success) {
        ctx.addIssue({
          code: "custom",
          message: "لطفاً یک ایمیل معتبر وارد کنید",
        });
      }
      return;
    }
    if (!/^09/.test(value)) {
      ctx.addIssue({
        code: "custom",
        message: "لطفاً شماره موبایل را با 09 وارد کنید",
      });
      return;
    }
    if (!/^09\d{9}$/.test(value)) {
      ctx.addIssue({
        code: "custom",
        message: "لطفا شماره همراه خود را به صورت صحیح وارد نمایید",
      });
    }
  }),
});

type formLoginData = z.infer<typeof formLoginSchema>;

export default function Login({ onNext }: LoginProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<formLoginData>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      identifier: "",
    },
  });

  const onSubmit = (data: formLoginData) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      onNext(data.identifier);
    }, 1000);
  };

  return (
    <AuthFormLayout heroImage="/auth/man-runner.webp">
      <div className="w-full md:w-[456px] border-2 border-neutral-200 rounded-lg p-6 bg-white">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-8"
        >
          <h2 className="text-black text-[28px] font-medium">ورود | ثبت نام</h2>
          <Controller
            name="identifier"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="login" className="text-neutral-700">
                  لطفا شماره موبایل یا ایمیل خود را وارد کنید
                </FieldLabel>
                <Input
                  {...field}
                  id="login"
                  type="text"
                  placeholder="*********09 یا Example@gmail.com"
                  aria-invalid={fieldState.invalid}
                  className={
                    fieldState.error
                      ? "bg-error-100 border-2 border-error-800 focus-visible:border-error-800 text-error-800"
                      : "focus-visible:border-neutral-600"
                  }
                />
                {fieldState.invalid && (
                  <FieldError
                    className="text-error-800"
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />
          <Button
            type="submit"
            className="flex items-center text-base-neutral disabled:opacity-70"
            variant="outline"
            size="xl"
            disabled={isLoading}
          >
            {isLoading && (
              <Spinner data-icon="inline-start" className="size-4" />
            )}
            ادامه
          </Button>
        </form>
      </div>
    </AuthFormLayout>
  );
}
