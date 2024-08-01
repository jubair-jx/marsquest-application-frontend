const CommonDashboardHeaderTitle = ({
  mainTitle,
  secondaryTitle,
}: {
  mainTitle: string;
  secondaryTitle?: string;
}) => {
  return (
    <div data-aos="fade-up">
      <h1 className=" text-gray-100 text-xl sm:text-3xl font-semibold font-Rubik mt-3 capitalize">
        {mainTitle}
      </h1>
      <span className="text-gray-200 text-sm font-normal font-poppins">
        {secondaryTitle}
      </span>
    </div>
  );
};

export default CommonDashboardHeaderTitle;
