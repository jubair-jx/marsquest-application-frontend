import Link from "next/link";

const Success = () => {
  return (
    <section className=" ">
      <div className="flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16 text-green-400 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>

        <h1 className=" md:text-5xl text-center text-2xl mt-2 text-green-500 font-Rubik font-semibold">
          Succcessfully Submitted Your Application !
        </h1>
        <p className=" mt-4 w-full sm:w-[600px] text-sm sm:text-base text-center font-Poppins text-gray-300">
          Thank you so much submiting your Mars Visit Application form. you will
          receive a confirmation email soon. have a good day...!!!
        </p>
        <Link href={"/"}>
          <button className=" mt-4 px-4 rounded-sm py-2 bg-green-500 font-Poppins font-medium text-white">
            Go to Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Success;
