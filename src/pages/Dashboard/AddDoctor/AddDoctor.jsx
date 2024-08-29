import Swal from "sweetalert2";
import Container from "../../../components/shared/Container/Container";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm();

  const emailValue = watch("doctorsEmail");

  useEffect(() => {
    if (emailValue) {
      trigger("doctorsEmail");
    }
  }, [emailValue, trigger]);

  const onFormSubmit = (data) => {
    console.log(data);
    Swal.fire({
      icon: "success",
      title: "Doctor Added Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const registerOptions = {
    doctorsName: { required: "Doctor's Name is required" },
    doctorsEmail: {
      required: "Doctor's Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address",
      },
    },
    qualifications: { required: "Qualifications is required" },
    specialty: { required: "Specialty is required" },
    workplace: { required: "Workplace is required" },
    designationAndDepartment: {
      required: "Designation & Department is required",
    },
    chamberName: {
      required: "Chamber Name is required",
    },
    visitingHour: {
      required: "Visiting Hour is required",
    },
    mobileNumber: {
      required: "Mobile Number is required",
    },
    photo: {
      required: "Photo is required",
    },
  };

  return (
    <div className="my-[140px]">
      <Container>
        <div className="3xl:mx-[140px]">
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="border p-7 rounded-3xl"
          >
            {/* doctor's name */}
            <div className="mb-5 flex flex-col items-start">
              <label
                htmlFor="doctorsName"
                className="mb-4"
              >{`Doctor's Name`}</label>
              <input
                type="text"
                placeholder="Enter Doctor's Name"
                className="border py-3 px-5 rounded-lg mr-4 w-full"
                {...register("doctorsName", registerOptions.doctorsName)}
              />
              <p className="ml-0 text-red-500 mt-2">
                {errors?.doctorsName && errors.doctorsName.message}
              </p>
            </div>
            {/* doctor's email */}
            <div className="mb-5 flex flex-col items-start">
              <label
                htmlFor="doctorsEmail"
                className="mb-4"
              >{`Doctor's Email`}</label>
              <input
                type="text"
                placeholder="Enter Doctor's Email"
                className="border py-3 px-5 rounded-lg mr-4 w-full"
                {...register("doctorsEmail", registerOptions.doctorsEmail)}
              />
              <p className="ml-0 text-red-500 mt-2">
                {errors?.doctorsEmail && errors.doctorsEmail.message}
              </p>
            </div>
            {/* qualifications  */}
            <div className="mb-5 flex flex-col items-start">
              <label
                htmlFor="qualifications"
                className="mb-4"
              >{`Qualifications`}</label>
              <input
                type="text"
                placeholder="Enter Qualifications"
                className="border py-3 px-5 rounded-lg mr-4 w-full"
                {...register("qualifications", registerOptions.qualifications)}
              />
              <p className="ml-0 text-red-500 mt-2">
                {errors?.qualifications && errors.qualifications.message}
              </p>
            </div>
            {/* specialty   */}
            <div className="mb-5 flex flex-col items-start">
              <label htmlFor="specialty" className="mb-4">{`Specialty`}</label>
              <input
                type="text"
                placeholder="Enter Specialty"
                className="border py-3 px-5 rounded-lg mr-4 w-full"
                {...register("specialty", registerOptions.specialty)}
              />
              <p className="ml-0 text-red-500 mt-2">
                {errors?.specialty && errors.specialty.message}
              </p>
            </div>
            {/* workplace   */}
            <div className="mb-5 flex flex-col items-start">
              <label htmlFor="workplace" className="mb-4">{`Workplace`}</label>
              <input
                type="text"
                placeholder="Enter Workplace"
                className="border py-3 px-5 rounded-lg mr-4 w-full"
                {...register("workplace", registerOptions.workplace)}
              />
              <p className="ml-0 text-red-500 mt-2">
                {errors?.workplace && errors.workplace.message}
              </p>
            </div>
            {/* designation & department   */}
            <div className="mb-5 flex flex-col items-start">
              <label
                htmlFor="designationAndDepartment"
                className="mb-4"
              >{`Designation & Department`}</label>
              <input
                type="text"
                placeholder="Enter Designation & Department"
                className="border py-3 px-5 rounded-lg mr-4 w-full"
                {...register(
                  "designationAndDepartment",
                  registerOptions.designationAndDepartment
                )}
              />
              <p className="ml-0 text-red-500 mt-2">
                {errors?.designationAndDepartment &&
                  errors.designationAndDepartment.message}
              </p>
            </div>
            {/* chamber name   */}
            <div className="mb-5 flex flex-col items-start">
              <label
                htmlFor="chamberName"
                className="mb-4"
              >{`Chamber Name`}</label>
              <input
                type="text"
                placeholder="Enter Chamber Name"
                className="border py-3 px-5 rounded-lg mr-4 w-full"
                {...register("chamberName", registerOptions.chamberName)}
              />
              <p className="ml-0 text-red-500 mt-2">
                {errors?.chamberName && errors.chamberName.message}
              </p>
            </div>
            {/* visiting hour   */}
            <div className="mb-5 flex flex-col items-start">
              <label
                htmlFor="visitingHour"
                className="mb-4"
              >{`Visiting Hour`}</label>
              <input
                type="text"
                placeholder="Enter Visiting Hour"
                className="border py-3 px-5 rounded-lg mr-4 w-full"
                {...register("visitingHour", registerOptions.visitingHour)}
              />
              <p className="ml-0 text-red-500 mt-2">
                {errors?.visitingHour && errors.visitingHour.message}
              </p>
            </div>
            {/* mobile number */}
            <div className="mb-5 flex flex-col items-start">
              <label
                htmlFor="mobileNumber"
                className="mb-4"
              >{`Mobile Number (For Appointment)`}</label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="border py-3 px-5 rounded-lg mr-4 w-full"
                {...register("mobileNumber", registerOptions.mobileNumber)}
              />
              <p className="ml-0 text-red-500 mt-2">
                {errors?.mobileNumber && errors.mobileNumber.message}
              </p>
            </div>

            {/* file input */}
            <div className="mb-5 flex flex-col items-start">
              <label
                htmlFor="photo"
                className="mb-4"
              >{`Upload Your Photo`}</label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-md w-full"
                {...register("photo", registerOptions.photo)}
              />
              <p className="ml-0 text-red-500 mt-2">
                {errors?.photo && errors.photo.message}
              </p>
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddDoctor;
