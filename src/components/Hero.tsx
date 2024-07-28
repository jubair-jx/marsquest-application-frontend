import Link from "next/link";

function Hero() {
  return (
    <section
      id="home"
      className="  md:h-[650px] lg:h-[690px] xl:h-[620px] 2xl:h-[650px] h-[520px] bg-gradient-to-r from-[#000018] to-[#010524] "
    >
      <div
        className="relative bg-cover  h-[615px] bg-center container mx-auto mt-16"
        style={{ backgroundImage: "url('/assets/Home/hero-grid.svg')" }}
      >
        <div className="container mx-auto h-full flex justify-between items-center px-10">
          <div className="flex items-end animate-spotlight mt-20">
            <div
              className="h-[160px] w-[160px] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 80%, rgb(168, 249, 237) 100%)",
                filter: "blur(130px)",
              }}
            ></div>
          </div>
        </div>

        <div className=" relative 2xl:bottom-[540px] lg:bottom-[540px] xl:bottom-[540px]  sm:bottom-[560px] bottom-[560px]">
          <div className="flex flex-col justify-center items-center mt-2 ">
            <h1 className="2xl:text-[64px] xl:text-[56px] lg:text-[52px] md:text-[48px] px-[6px] text-center text-[32px] bg-gradient-to-r lg:px-44 from-[#b3b3b3]  via-[#c9c9c9] font-Rubik  to-[#eaeaea] bg-clip-text text-transparent leading-tight mt-3 font-bold">
              Elevate on Your <span className=" text-violet-500">Mars</span>{" "}
              Adventure
            </h1>
            <h1 className="2xl:text-[64px] xl:text-[56px] lg:text-[52px] md:text-[48px] px-[6px] text-center text-[32px] bg-gradient-to-r lg:px-44 from-[#b3b3b3]  via-[#c9c9c9] font-Rubik to-[#eaeaea] bg-clip-text text-transparent leading-tight mt-2 font-bold">
              <span className=" text-violet-400">Blaze</span> the Trail to Mars
            </h1>

            <p className="md:text-[15px] text-[11px] lg:px-64 px-4 font-normal font-Raleway mt-4 md:leading-6 text-center text-[#c7c7c7ca]">
              Become a part of history by being among the first explorers to set
              foot on Mars. MarsQuest guides you through a detailed application
              process, ensuring we gather all the necessary information for a
              safe and thrilling journey. Prepare for the ultimate adventure
              with our seamless and efficient platform.
            </p>

            <Link href={"/book-seat"}>
              <button className="relative z-50 cursor-pointer inline-flex h-11 mt-6 overflow-hidden rounded-md p-[1.5px] focus:outline-none gap-2">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex font-Kanit h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-900 px-7 py-1 font-medium text-white backdrop-blur-3xl text-xs sm:text-sm">
                  Start Your Journey
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
