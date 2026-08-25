"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AuthFormLayout from "./AuthFormLayout";
import * as z from "zod";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

type RegisterProps = {
  onBack: () => void;
};

const formRegisterSchema = z.object({
  fullName: z.string().trim().min(1, "نام و نام خانوادگی الزامی است"),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, "شماره تلفن همراه الزامی است"),
  email: z
    .string()
    .trim()
    .email("ایمیل وارد شده معتبر نیست")
    .optional()
    .or(z.literal("")),
});

type formRegisterData = z.infer<typeof formRegisterSchema>;

export default function Register({ onBack }: RegisterProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<formRegisterData>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
    },
  });

  const onSubmit = (data: formRegisterData) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };

  return (
    <AuthFormLayout heroImage="/auth/woman-sitting.webp" onBack={onBack}>
      <div className="w-full md:w-[456px] border-2 border-neutral-200 rounded-lg p-6 bg-white">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-8"
        >
          <h2 className="text-black text-[28px] font-medium">ثبت‌ نام</h2>
          <Controller
            name="fullName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="fullName"
                  className="text-neutral-700 after:content-['*'] after:text-error-800 after:text-base"
                >
                  نام و نام خانوادگی
                </FieldLabel>
                <Input
                  {...field}
                  id="fullName"
                  type="text"
                  placeholder="نام خود را به فارسی وارد کنید"
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
          <Controller
            name="phoneNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor="phoneNumber"
                  className="text-neutral-700 after:content-['*'] after:text-error-800 after:text-base"
                >
                  شماره تلفن همراه
                </FieldLabel>
                <Input
                  {...field}
                  id="phoneNumber"
                  type="text"
                  placeholder="09*********"
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
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email" className="text-neutral-700">
                  ایمیل(اختیاری)
                </FieldLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="Example@gmail.com"
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
            تایید
          </Button>
          <Button
            type="button"
            variant="destructive"
            className="hidden md:flex justify-start gap-2 "
            onClick={onBack}
          >
            <svg
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4272 18.8201C14.2372 18.8201 14.0472 18.7501 13.8972 18.6001C13.6072 18.3101 13.6072 17.8301 13.8972 17.5401L19.4372 12.0001L13.8972 6.46012C13.6072 6.17012 13.6072 5.69012 13.8972 5.40012C14.1872 5.11012 14.6672 5.11012 14.9572 5.40012L21.0272 11.4701C21.3172 11.7601 21.3172 12.2401 21.0272 12.5301L14.9572 18.6001C14.8072 18.7501 14.6172 18.8201 14.4272 18.8201Z"
                fill="#404040"
              />
              <path
                d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
                fill="#404040"
              />
            </svg>
            <span className="text-neutral-800 text-lg font-semibold">
              صفحه قبلی
            </span>
          </Button>
        </form>
      </div>
    </AuthFormLayout>
  );
}
