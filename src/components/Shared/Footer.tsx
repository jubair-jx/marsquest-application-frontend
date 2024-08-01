import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full relative pt-20 pb-10 container mx-auto z-10">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-20 -z-10">
        <Image
          src="/footer-grid.svg"
          height={400}
          width={400}
          alt="grid"
          className="w-full sm:h-full h-[900px] opacity-60 -z-30"
        />
      </div>
      <div className="sm:flex justify-center items-center animate-spotlight absolute bottom-32 sm:left-[620px] left-32 ">
        <div
          className="h-[170px] w-[170px] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 80%, rgb(168, 249, 237) 100%)",
            filter: "blur(130px)",
          }}
        ></div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-2xl sm:text-4xl font-Rubik font-medium text-white text-center">
          Pioneer the Future of Space{" "}
          <span className=" text-purple-400">Travel</span>
        </h1>
        <p className="text-gray-300 font-Raleway text-sm  my-5 text-center">
          Be a part of the extraordinary journey to the Red Planet. MarsQuest
          ensures a thorough and smooth application process
        </p>
      </div>
      <div className="flex z-40 mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base font-Rubik text-white mb-3 text-sm md:font-normal font-light">
          Copyright 2022-2025 © Developed by{" "}
          <Link href={"https://mohammad-jubair.vercel.app/"} target="_blank">
            <span className=" text-purple-500 cursor-pointer font-medium z-50">
              Mohammad Jubair
            </span>
          </Link>
        </p>

        <div className="flex items-center md:gap-3 gap-6 text-white">
          {socialMedia.map((info) => (
            <Link target="_blank" href={info.link} key={info.id}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 text-white">
                <Image
                  src={info.img}
                  alt="icons"
                  className=" text-white"
                  width={20}
                  height={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
