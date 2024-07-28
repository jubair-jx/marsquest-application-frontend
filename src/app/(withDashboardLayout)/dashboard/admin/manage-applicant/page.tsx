"use client";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";

function ApplicantManangement() {
  const isLoading = false;
  return (
    <section className=" mt-6">
      <CommonDashboardHeaderTitle mainTitle="Boss!!! You can see and manage applicants" />
      <div
        data-aos="fade-down"
        className="w-full mb-8 overflow-hidden rounded-lg shadow-xs mt-10"
      >
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-gray-800 font-poppins text-center uppercase border-b bg-gray-50 ">
                <th className="px-3 py-3">Sl No</th>
                <th className="px-3 py-3">Name</th>

                <th className="px-3 py-3">E-mail</th>
                <th className="px-3 py-3">Phone</th>
                <th className="px-3 py-3">DOB</th>
                <th className="px-3 py-3">Dept. Date</th>
                <th className="px-3 py-3">Retn. Date</th>
                <th className="px-3 py-3">Details</th>
              </tr>
            </thead>
            {!isLoading ? (
              // data?.map((item: any, index: number) => (
              <tbody className="bg-white divide-y text-center divide-gray-800 font-poppins ">
                {/* {
                  <p className=" text-center font-Rubik text-base font-medium">
                    Applicant Date Not Found!!! Please Login Now...
                  </p>
                } */}
                <tr className="text-gray-800">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-center">{"index + 1"}</p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold text-center">
                          {"item?.name"}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-sm">{"item?.email"}</td>
                  <td className="px-4 py-3 text-sm">{"item?.contactNumber"}</td>
                  <td className="px-4 py-3 text-xs">
                    <span>{"Active"}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      Active
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      Make Admin
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              // ))
              <div>Loading...</div>
            )}
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-800 uppercase border-t font-poppins border-gray-400 bg-gray-50 sm:grid-cols-9 ">
          <span className="flex items-center col-span-3">
            Showing 21-30 of 100
          </span>
          <span className="col-span-2"></span>

          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    2
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                    3
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    4
                  </button>
                </li>
                <li>
                  <span className="px-3 py-1">...</span>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    8
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    9
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </section>
  );
}

export default ApplicantManangement;
