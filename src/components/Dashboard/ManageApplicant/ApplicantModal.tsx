import RUModal from "@/components/Shared/Modal/RUModal";
import { useGetApplicantQuery } from "@/redux/api/applicantApi";
import dayjs from "dayjs";
import React from "react";

type TProps = {
  id: string | undefined;
  ModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ApplicantDetailsModal({ ModalOpen, setModalOpen, id }: TProps) {
  const { data, isLoading } = useGetApplicantQuery(id);
  if (isLoading) return <div>Loading...</div>;

  return (
    <RUModal
      open={ModalOpen}
      setOpen={setModalOpen}
      title="Boss!!! You can see now applicant details"
    >
      {!isLoading ? (
        <div className=" flex justify-around gap-2 items-center">
          <div>
            <h1 className=" font-Rubik font-medium  text-lg">
              Name :{" "}
              <span className="font-Poppins font-normal text-base">
                {data?.fullName || "N/A"}
              </span>
            </h1>
            <h1 className=" font-Rubik font-medium  text-lg">
              Nationality :{" "}
              <span className="font-Poppins font-normal text-base">
                {data?.nationality || "N/A"}
              </span>
            </h1>
            <h1 className=" font-Rubik font-medium  text-lg">
              Date of Birth :{" "}
              <span className="font-Poppins font-normal text-base">
                {" "}
                {dayjs(data?.dateOfBirth).format("DD/MM/YYYY") || "N/A"}
              </span>
            </h1>

            <h1 className=" font-Rubik font-medium  text-lg">
              Email :{" "}
              <span className="font-Poppins font-normal text-base">
                {data?.email || "N/A"}
              </span>
            </h1>
            <h1 className=" font-Rubik font-medium  text-lg">
              Phone :{" "}
              <span className="font-Poppins font-normal text-base">
                {data?.phone || "N/A"}
              </span>
            </h1>
            <h1 className=" font-Rubik font-medium  text-lg">
              Accommodation :{" "}
              <span className="font-Poppins font-normal text-base">
                {data?.accommodation || "N/A"}
              </span>
            </h1>
          </div>
          {/* <div>
            <h1 className=" font-Rubik font-medium  text-lg">
              Departure Date :{" "}
              <span className="font-Poppins font-normal text-base">
                {dayjs(data?.departureDate).format("DD/MM/YYYY") || "N/A"}
              </span>
            </h1>
            <h1 className=" font-Rubik font-medium  text-lg">
              Return Date :{" "}
              <span className="font-Poppins font-normal text-base">
                {" "}
                {dayjs(data?.returnDate).format("DD/MM/YYYY") || "N/A"}
              </span>
            </h1>
            <h1 className=" font-Rubik font-medium text-lg">
              Special Request :{" "}
              <span className="font-Poppins font-normal text-base">
                {data?.specialRequests === ""
                  ? "N/A"
                  : data?.specialRequests || "N/A"}
              </span>
            </h1>

            <h1 className=" font-Rubik font-medium  text-lg">
              Emergency Contact :{" "}
              <span className="font-Poppins font-normal text-base">
                {data?.emergencyContact || "N/A"}
              </span>
            </h1>
            <h1 className=" font-Rubik font-medium  text-lg">
              Medical Conditions :{" "}
              <span className="font-Poppins font-normal text-base">
                {data?.specialRequests === "" ? "N/A" : data?.medicalConditions}
              </span>
            </h1>
            <h1 className=" font-Rubik font-medium  text-lg">
              Health Declaration :{" "}
              <span className="font-Poppins font-normal text-base">
                {data?.healthDeclaration === true ? "Yes" : "No" || "N/A"}
              </span>
            </h1>
          </div> */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </RUModal>
  );
}

export default ApplicantDetailsModal;
