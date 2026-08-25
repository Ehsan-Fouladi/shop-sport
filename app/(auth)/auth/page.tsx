"use client";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Registered";
import Verify from "@/components/auth/Verify";
import { useState } from "react";

export default function Auth() {
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 2, 0));
  };

  return (
    <>
      {step === 0 && <Login onNext={nextStep} />}
      {step === 1 && <Verify onNext={nextStep} onBack={previousStep} />}
      {step === 2 && <Register onBack={previousStep} />}
    </>
  );
}
