import Hero from "@/components/Hero";
import Footer from "@/components/Shared/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className=" bg-gradient-to-r from-[#000018] to-[#010524] relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav />
      <Hero />
      <Footer />
    </main>
  );
}
