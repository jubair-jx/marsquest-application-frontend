"use client";
import ApplicantDetailsModal from "@/components/Dashboard/ManageApplicant/ApplicantModal";
import { useGetApplicantsQuery } from "@/redux/api/applicantApi";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";
import dayjs from "dayjs";
import { useState } from "react";

function ApplicantManangement() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [applicantId, setApplicantId] = useState<string | undefined>(undefined);
  const handleModal = (id: string) => {
    setApplicantId(id);
    setModalOpen(true);
  };
  const { data, isLoading } = useGetApplicantsQuery({});
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className=" mt-6">
        <CommonDashboardHeaderTitle mainTitle="Boss!!! You can see and manage applicants" />
        <div
          data-aos="fade-down"
          className="w-full mb-8 overflow-hidden rounded-lg shadow-xs mt-10"
        >
          <div className="w-full overflow-x-auto">
            <div className=" text-yellow-200 font-Rubik text-base mb-4 font-medium">
              Please Login Your Own Credentials, Otherwise, you {"won't"} see
              and do any things
            </div>

            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-gray-800 font-Raleway text-center uppercase border-b bg-gray-50 ">
                  <th className="px-3 py-3">Sl No</th>
                  <th className="px-3 py-3">Name</th>
                  <th className="px-3 py-3">E-mail</th>
                  <th className="px-3 py-3">Phone</th>
                  <th className="px-3 py-3">Dept. Date</th>
                  <th className="px-3 py-3">Retn. Date</th>
                  <th className="px-3 py-3">Details</th>
                </tr>
              </thead>
              {!isLoading ? (
                data?.map((item: any, index: number) => (
                  <tbody
                    key={item.id}
                    className="bg-white divide-y border-b text-center divide-gray-800 font-poppins mx-auto"
                  >
                    <tr className="text-gray-800 text-center mx-auto">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-center">{index + 1}</p>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center text-sm">
                          <p className="font-semibold text-center">
                            {item?.fullName}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-sm">{item?.email}</td>
                      <td className="px-4 py-3 text-sm">{item?.phone}</td>
                      <td className="px-4 py-3 text-sm font-semibold">
                        {dayjs(item?.departureDate).format("DD/MM/YYYY")}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center font-semibold justify-center space-x-2 text-sm">
                          {dayjs(item?.returnDate).format("DD/MM/YYYY")}
                        </div>
                      </td>
                      <td
                        onClick={() => handleModal(item?.id)}
                        className="px-4 py-3 text-center mx-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-7 text-center mx-auto cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <div className="text-white font-Poppins text-base font-medium">
                  Loading...
                </div>
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
      <ApplicantDetailsModal
        id={applicantId}
        ModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

export default ApplicantManangement;
