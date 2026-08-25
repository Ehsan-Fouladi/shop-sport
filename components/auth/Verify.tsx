"use client";

import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError } from "../ui/field";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import * as z from "zod";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import AuthFormLayout from "./AuthFormLayout";

type VerifyProps = {
  onNext: (otp: string) => void;
  onBack: () => void;
};

const formVerifySchema = z.object({
  otp: z.string().regex(/^\d{5}$/, {
    error: "لطفاً کد تایید ۵ رقمی را وارد کنید",
  }),
});

type formVerifyData = z.infer<typeof formVerifySchema>;

export default function Verify({ onNext, onBack }: VerifyProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(60);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const form = useForm<formVerifyData>({
    resolver: zodResolver(formVerifySchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data: formVerifyData) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      onNext(data.otp);
    }, 1000);
  };

  return (
    <AuthFormLayout heroImage="/auth/two-girls.webp" onBack={onBack}>
      <div className="w-full md:w-[456px] border-2 border-neutral-200 rounded-lg p-6 bg-white">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-8"
        >
          <h2 className="text-black text-[28px] font-medium">
            کد تایید را وارد کنید
          </h2>
          <Controller
            name="otp"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <InputOTP
                  maxLength={5}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                >
                  <InputOTPGroup className="gap-2" dir="ltr">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                  </InputOTPGroup>
                </InputOTP>
                {fieldState.invalid && (
                  <FieldError
                    className="text-error-800"
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />
          <div className="w-full flex justify-between items-center">
            <span className="text-neutral-700 text-sm font-medium">
              کد برای شما ارسال شد
            </span>
            <div className="flex items-center">
              <Button
                type="button"
                variant="destructive"
                className={
                  seconds
                    ? "text-neutral-400 text-sm font-medium"
                    : "text-base-primary text-sm font-medium"
                }
                disabled={seconds > 0}
                onClick={() => setSeconds(60)}
              >
                ارسال دوباره
              </Button>
              <span className="text-neutral-700 text-sm font-medium">
                {`${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`}
              </span>
            </div>
          </div>
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
            ثبت
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
