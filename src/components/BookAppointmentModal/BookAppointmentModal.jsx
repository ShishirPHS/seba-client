import PropTypes from "prop-types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const BookAppointmentModal = ({ chamber, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    console.log(data);

    Swal.fire({
      icon: "success",
      title: "Your Appointment Booked Successfully!",
      showConfirmButton: false,
      timer: 2000,
    });

    // close modal after successfully booked appointment 
    document.getElementById("modal-close-btn")?.click();
  };

  const handleSubmitBtn = () => {
    document.getElementById("submit")?.click();
  };

  const registerOptions = {
    phoneNumber: { required: "Please enter your phone number" },
    patientName: { required: "Please enter patient name" },
  };

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  return (
    <>
      <button
        type="button"
        id="modal-open-btn"
        className="hidden py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-vertically-centered-modal"
        data-hs-overlay="#hs-vertically-centered-modal"
      >
        Book Appointment Modal
      </button>

      <div
        id="hs-vertically-centered-modal"
        className="hs-overlay [--overlay-backdrop:static] hs-overlay-backdrop-open:bg-[rgba(0,0,0,0.4)] hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabIndex="-1"
        aria-labelledby="hs-vertically-centered-modal-label"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3
                id="hs-vertically-centered-modal-label"
                className="font-bold text-gray-800 dark:text-white"
              >
                Book Appointment Now
              </h3>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay="#hs-vertically-centered-modal"
                onClick={closeModal}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <p className="text-gray-800 dark:text-neutral-400 underline font-medium">
                {chamber.chamberName}
              </p>
              <div className="mt-6">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                  {/* phone number of patient */}
                  <div className="mb-3 flex flex-col items-start">
                    <input
                      id="phoneNumber"
                      type="number"
                      placeholder="Enter Phone Number (018********)"
                      className="border py-3 px-5 rounded-lg w-full"
                      {...register("phoneNumber", registerOptions.phoneNumber)}
                    />
                    <p className="ml-0 text-red-500 mt-2">
                      {errors?.phoneNumber && errors.phoneNumber.message}
                    </p>
                  </div>
                  {/* patient name */}
                  <div className="mb-3 flex flex-col items-start">
                    <input
                      id="patientName"
                      type="text"
                      placeholder="Enter Patient Name"
                      className="border py-3 px-5 rounded-lg w-full"
                      {...register("patientName", registerOptions.patientName)}
                    />
                    <p className="ml-0 text-red-500 mt-2">
                      {errors?.patientName && errors.patientName.message}
                    </p>
                  </div>
                  <p className="text-red-500">
                    Book now and get contact details, address and appointment
                    time in SMS.
                  </p>
                  <button id="submit" type="submit" className="hidden">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button
                type="button"
                id="modal-close-btn"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-overlay="#hs-vertically-centered-modal"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleSubmitBtn}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BookAppointmentModal.propTypes = {
  chamber: PropTypes.object,
  closeModal: PropTypes.func,
};

export default BookAppointmentModal;
