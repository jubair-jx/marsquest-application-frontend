import PageHeader from "@/components/Shared/CommonTitile/CommonTitile";
import StepNavigation from "@/components/StepNavigation";
import React from "react";

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen px-6 max-w-7xl mx-auto py-20">
      <PageHeader
        title="Book your own seat"
        subtitle="Have an journey with that? Let us know!"
      />

      <div className="mt-20 mb-28 flex flex-col gap-x-36 text-white lg:flex-row">
        <StepNavigation />

        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
