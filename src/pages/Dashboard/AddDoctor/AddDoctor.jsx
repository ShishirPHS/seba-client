import Swal from "sweetalert2";
import Container from "../../../components/shared/Container/Container";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddDoctor = () => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm();

  const emailValue = watch("doctorsEmail");

  const imageSelected = watch("photo");

  useEffect(() => {
    if (emailValue) {
      trigger("doctorsEmail");
    }
  }, [emailValue, trigger]);

  useEffect(() => {
    if (imageSelected) {
      trigger("photo");
    }
  }, [imageSelected, trigger]);

  const uploadImage = async () => {
    if (!imageSelected || imageSelected.length === 0) {
      console.error("No image selected for upload.");
      return;
    }

    const file = imageSelected[0]; // File object from the input
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", `${import.meta.env.VITE_UPLOAD_PRESET}`);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_CLOUDINARY_URL}`,
        formData
      );

      console.log("Image uploaded successfully:", res.data.secure_url);
      return res.data.secure_url;
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error uploading image:", error.response.data);
      } else if (error.request) {
        // Request was made but no response was received
        console.error("No response from server:", error.request);
      } else {
        // Something else happened while setting up the request
        console.error("Error:", error.message);
      }
    }
  };

  const onFormSubmit = async (data) => {
    console.log(data);

    const {
      doctorsName,
      doctorsEmail,
      qualifications,
      specialty,
      workplace,
      designationAndDepartment,
      chamberName,
      visitingHour,
      mobileNumber,
    } = data;

    const doctor = {
      doctorsName,
      doctorsEmail,
      qualifications,
      specialty,
      workplace,
      designationAndDepartment,
      chamberName,
      visitingHour,
      mobileNumber,
    };

    if (imageSelected) {
      const uploadedImageUrl = await uploadImage();

      if (uploadedImageUrl) {
        try {
          const res = await axiosPublic.post("/addDoctor", {
            ...doctor,
            photo: uploadedImageUrl,
          });

          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Doctor Added Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Failed to add doctor",
            text: error.message,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Image Upload Failed",
          text: "Please try again later",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "No image selected",
        text: "Please select an image before submitting the form.",
      });
    }
  };
  const registerOptions = {
    doctorsName: { required: "Please enter doctor's name" },
    doctorsEmail: {
      required: "Please enter doctor's email",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    qualifications: {
      required: "Please enter your degrees and qualifications",
    },
    specialty: { required: "Please enter specialty" },
    workplace: { required: "Please enter workplace" },
    designationAndDepartment: {
      required: "Please enter designation & department",
    },
    chamberName: {
      required: "Please enter chamber name",
    },
    chamberAddress: {
      required: "Please enter chamber address",
    },
    visitingHour: {
      required: "Please enter visiting hour",
    },
    mobileNumber: {
      required: "Please enter mobile number",
    },
    photo: {
      required: "Please select a photo",
    },
  };

  return (
    <div className="my-[100px]">
      <Container>
        <div className="mx-5 3xl:mx-[140px]">
          <div className="border p-7 rounded-3xl max-w-[1000px] mx-auto font-poppins">
            <h4 className="text-center text-3xl font-bold mb-10">Add Doctor</h4>
            <form onSubmit={handleSubmit(onFormSubmit)} className="">
              {/* doctor's name */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="doctorsName" className="mb-2 font-medium">
                  {`Doctor's Name`}
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter doctor's name"
                  className="border py-3 px-5 rounded-lg mr-4 w-full"
                  {...register("doctorsName", registerOptions.doctorsName)}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.doctorsName && errors.doctorsName.message}
                </p>
              </div>
              {/* doctor's email */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="doctorsEmail" className="mb-2 font-medium">
                  {`Doctor's Email`}
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter doctor's valid email"
                  className="border py-3 px-5 rounded-lg mr-4 w-full"
                  {...register("doctorsEmail", registerOptions.doctorsEmail)}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.doctorsEmail && errors.doctorsEmail.message}
                </p>
              </div>
              {/* qualifications  */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="qualifications" className="mb-2 font-medium">
                  Qualifications
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your degrees and qualifications"
                  className="border py-3 px-5 rounded-lg mr-4 w-full"
                  {...register(
                    "qualifications",
                    registerOptions.qualifications
                  )}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.qualifications && errors.qualifications.message}
                </p>
              </div>
              {/* specialty   */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="specialty" className="mb-2 font-medium">
                  Specialty
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Example: Medicine Specialist"
                  className="border py-3 px-5 rounded-lg mr-4 w-full"
                  {...register("specialty", registerOptions.specialty)}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.specialty && errors.specialty.message}
                </p>
              </div>
              {/* workplace   */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="workplace" className="mb-2 font-medium">
                  Workplace
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Example: Dhaka Medical College Hospital"
                  className="border py-3 px-5 rounded-lg mr-4 w-full"
                  {...register("workplace", registerOptions.workplace)}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.workplace && errors.workplace.message}
                </p>
              </div>
              {/* designation & department   */}
              <div className="mb-3 flex flex-col items-start">
                <label
                  htmlFor="designationAndDepartment"
                  className="mb-2 font-medium"
                >
                  Designation & Department
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Example: Assistant Professor (Medicine)"
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
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="chamberName" className="mb-2 font-medium">
                  Chamber Name
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Example: Popular Diagnostic Centre, Dhanmondi"
                  className="border py-3 px-5 rounded-lg mr-4 w-full"
                  {...register("chamberName", registerOptions.chamberName)}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.chamberName && errors.chamberName.message}
                </p>
              </div>
              {/* chamber address   */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="chamberAddress" className="mb-2 font-medium">
                  Chamber Address
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="House #16 Road No. 2, Dhaka 1205"
                  className="border py-3 px-5 rounded-lg mr-4 w-full"
                  {...register(
                    "chamberAddress",
                    registerOptions.chamberAddress
                  )}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.chamberAddress && errors.chamberAddress.message}
                </p>
              </div>
              {/* visiting hour   */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="visitingHour" className="mb-2 font-medium">
                  Visiting Hour
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Example: 6pm to 9pm (Closed: Friday)"
                  className="border py-3 px-5 rounded-lg mr-4 w-full"
                  {...register("visitingHour", registerOptions.visitingHour)}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.visitingHour && errors.visitingHour.message}
                </p>
              </div>
              {/* mobile number */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="mobileNumber" className="mb-2 font-medium">
                  Mobile Number (For Appointment)
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder="017********"
                  className="border py-3 px-5 rounded-lg mr-4 w-full"
                  {...register("mobileNumber", registerOptions.mobileNumber)}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.mobileNumber && errors.mobileNumber.message}
                </p>
              </div>

              {/* file input */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="photo" className="mb-2 font-medium">
                  Upload Your Photo
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500 file:me-4 file:py-3 file:px-5 file:rounded-tl-lg file:rounded-bl-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary border rounded-lg transition-all"
                  {...register("photo", registerOptions.photo)}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.photo && errors.photo.message}
                </p>
              </div>
              <button
                type="submit"
                className="bg-primary text-white hover:bg-secondary py-3 px-8 rounded-2xl mt-[10px] transition-all"
              >
                Add Doctor
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddDoctor;
