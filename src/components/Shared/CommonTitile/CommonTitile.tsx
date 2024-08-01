export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <h1 className="mb-4 font-Rubik text-2xl font-semibold text-gray-100 md:text-7xl">
        {title}
      </h1>
      {subtitle && (
        <span className="text-sm font-Poppins font-light text-gray-300 md:text-base">
          {subtitle}
        </span>
      )}
    </>
  );
}
