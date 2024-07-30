"use client";

import { formSteps } from "@/data";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useEffect, useState } from "react";

export default function StepNavigation() {
  const pathname = usePathname();
  const currentPath = path.basename(pathname);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(formSteps.findIndex((step) => step.route === currentPath));
  }, [currentPath]);

  return (
    <div className="mb-12 mt-4 lg:mb-0 min-w-60">
      {/* list of form steps */}
      <div className="relative flex flex-row justify-between lg:flex-col lg:justify-start lg:gap-8">
        {formSteps.map((step, i) => (
          <Link
            href={step.link}
            key={step.link}
            className="group z-20 flex items-center gap-3 text-2xl"
            prefetch={true}
          >
            <span
              className={clsx(
                "flex h-10 w-10 items-center justify-center rounded-full border  text-sm  transition-colors duration-200  lg:h-12 lg:w-12 lg:text-lg",
                {
                  "border-none bg-violet-800 text-white group-hover:border-none group-hover:text-black":
                    currentPath === step.route,
                  "border-white/75 bg-gray-800 group-hover:border-white group-hover:text-white text-white/75":
                    currentPath !== step.route,
                }
              )}
            >
              {i + 1}
            </span>
            <span
              className={clsx(
                "hidden text-white/90 text-lg font-Rubik transition-colors duration-200 group-hover:text-white lg:block",
                {
                  "font-light": currentPath !== step.route,
                  " text-white": currentPath === step.route,
                }
              )}
            >
              {step.title}
            </span>
          </Link>
        ))}
        {/* back button */}
        <button className="md:block hidden">
          <Link
            href="/"
            className="mb-4 flex items-center justify-center gap-2 text-base border-gray-500 rounded-md border-2 shadow-md px-2 py-2 text-center font-medium font-Poppins disabled:text-white/50 lg:mb-12 lg:gap-5"
          >
            Back To Home{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </Link>
        </button>
        {/* mobile background dashes */}
        <div className="absolute top-4 flex h-1 w-full border-b border-dashed lg:hidden" />
      </div>
    </div>
  );
}
