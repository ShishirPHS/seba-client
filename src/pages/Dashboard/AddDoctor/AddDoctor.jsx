import Swal from "sweetalert2";
import Container from "../../../components/shared/Container/Container";
import { useFieldArray, useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAllSpecialties from "../../../hooks/useAllSpecialties";
import Select from "react-select";
import "./AddDoctor.css";

const AddDoctor = () => {
  const axiosPublic = useAxiosPublic();
  const [allSpecialties] = useAllSpecialties();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    control,
    reset,
  } = useForm({
    defaultValues: {
      chamberInfos: [
        {
          chamberCount: 1,
          chamberName: "",
          location: "",
          visitingPrice: "",
          visitingHour: "",
          mobileNumber: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "chamberInfos",
  });

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

  // image upload function
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
      yearsOfExperience,
      designationAndDepartment,
      chamberInfos,
    } = data;

    const doctor = {
      doctorsName,
      doctorsEmail,
      qualifications,
      specialty,
      yearsOfExperience,
      designationAndDepartment,
      chamberInfos,
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
            reset();
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
    specialty: { required: "Please select specialty" },
    yearsOfExperience: { required: "Please enter years of experience" },
    designationAndDepartment: {
      required: "Please enter designation & department",
    },
    chamberName: {
      required: "Please enter chamber name",
    },
    location: {
      required: "Please enter chamber location",
    },
    visitingPrice: {
      required: "Please enter a valid number",
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

  // style for react-select
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#fff",
    }),
  };

  return (
    <div id="add-doctor" className="my-[100px]">
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
                  id="doctorsName"
                  type="text"
                  placeholder="Enter doctor's name"
                  className="border py-3 px-5 rounded-lg w-full"
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
                  id="doctorsEmail"
                  type="text"
                  placeholder="Enter doctor's valid email"
                  className="border py-3 px-5 rounded-lg w-full"
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
                  id="qualifications"
                  type="text"
                  placeholder="Enter your degrees and qualifications"
                  className="border py-3 px-5 rounded-lg w-full"
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
                <Select
                  className="w-full border rounded-lg"
                  options={allSpecialties.length > 0 ? allSpecialties : []}
                  placeholder={
                    allSpecialties.length > 0
                      ? "Select specialty"
                      : "Loading specialties..."
                  }
                  noOptionsMessage={() => "No specialty found"}
                  styles={style}
                  {...register("specialty", registerOptions.specialty)}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.specialty && errors.specialty.message}
                </p>
              </div>
              {/* years of experience   */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="yearsOfExperience" className="mb-2 font-medium">
                  Years Of Experience
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  id="yearsOfExperience"
                  type="text"
                  placeholder="Enter your experience"
                  className="border py-3 px-5 rounded-lg w-full"
                  {...register(
                    "yearsOfExperience",
                    registerOptions.yearsOfExperience
                  )}
                />
                <p className="ml-0 text-red-500 mt-2">
                  {errors?.yearsOfExperience &&
                    errors.yearsOfExperience.message}
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
                  id="designationAndDepartment"
                  type="text"
                  placeholder="Example: Assistant Professor (Medicine)"
                  className="border py-3 px-5 rounded-lg w-full"
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
              {/* ------------------------------------ chamber infos start ------------------------------------ */}
              {fields.map((chamber, index) => (
                <div key={chamber.id}>
                  {/* chamber name   */}
                  <div className="mb-3 flex flex-col items-start">
                    <label
                      htmlFor={`chamberInfos.${index}.chamberName`}
                      className="mb-2 font-medium"
                    >
                      Chamber Name
                      <span className="text-red-600 font-normal ml-1">*</span>
                    </label>
                    <input
                      id={`chamberInfos.${index}.chamberName`}
                      type="text"
                      placeholder="Example: Popular Diagnostic Centre, Dhanmondi"
                      className="border py-3 px-5 rounded-lg w-full"
                      {...register(
                        `chamberInfos.${index}.chamberName`,
                        registerOptions.chamberName
                      )}
                    />
                    <p className="ml-0 text-red-500 mt-2">
                      {errors?.chamberInfos?.[index]?.chamberName?.message}
                    </p>
                  </div>
                  {/* location   */}
                  <div className="mb-3 flex flex-col items-start">
                    <label
                      htmlFor={`chamberInfos.${index}.location`}
                      className="mb-2 font-medium"
                    >
                      Location
                      <span className="text-red-600 font-normal ml-1">*</span>
                    </label>
                    <input
                      id={`chamberInfos.${index}.location`}
                      type="text"
                      placeholder="House #16 Road No. 2, Dhaka 1205"
                      className="border py-3 px-5 rounded-lg w-full"
                      {...register(
                        `chamberInfos.${index}.location`,
                        registerOptions.location
                      )}
                    />
                    <p className="ml-0 text-red-500 mt-2">
                      {errors?.chamberInfos?.[index]?.location?.message}
                    </p>
                  </div>
                  {/* visiting price   */}
                  <div className="mb-3 flex flex-col items-start">
                    <label
                      htmlFor={`chamberInfos.${index}.visitingPrice`}
                      className="mb-2 font-medium"
                    >
                      Visiting Price
                      <span className="text-red-600 font-normal ml-1">*</span>
                    </label>
                    <input
                      id={`chamberInfos.${index}.visitingPrice`}
                      type="number"
                      placeholder="Enter your visiting price"
                      className="border py-3 px-5 rounded-lg w-full"
                      {...register(
                        `chamberInfos.${index}.visitingPrice`,
                        registerOptions.visitingPrice
                      )}
                    />
                    <p className="ml-0 text-red-500 mt-2">
                      {errors?.chamberInfos?.[index]?.visitingPrice?.message}
                    </p>
                  </div>
                  {/* visiting hour   */}
                  <div className="mb-3 flex flex-col items-start">
                    <label
                      htmlFor={`chamberInfos.${index}.visitingHour`}
                      className="mb-2 font-medium"
                    >
                      Visiting Hour
                      <span className="text-red-600 font-normal ml-1">*</span>
                    </label>
                    <input
                      id={`chamberInfos.${index}.visitingHour`}
                      type="text"
                      placeholder="Example: 6pm to 9pm (Closed: Friday)"
                      className="border py-3 px-5 rounded-lg w-full"
                      {...register(
                        `chamberInfos.${index}.visitingHour`,
                        registerOptions.visitingHour
                      )}
                    />
                    <p className="ml-0 text-red-500 mt-2">
                      {errors?.chamberInfos?.[index]?.visitingHour?.message}
                    </p>
                  </div>
                  {/* mobile number */}
                  <div className="mb-3 flex flex-col items-start">
                    <label
                      htmlFor={`chamberInfos.${index}.mobileNumber`}
                      className="mb-2 font-medium"
                    >
                      Mobile Number (For Appointment)
                      <span className="text-red-600 font-normal ml-1">*</span>
                    </label>
                    <input
                      id={`chamberInfos.${index}.mobileNumber`}
                      type="text"
                      placeholder="017********"
                      className="border py-3 px-5 rounded-lg w-full"
                      {...register(
                        `chamberInfos.${index}.mobileNumber`,
                        registerOptions.mobileNumber
                      )}
                    />
                    <p className="ml-0 text-red-500 mt-2">
                      {errors?.chamberInfos?.[index]?.mobileNumber?.message}
                    </p>
                  </div>
                  <div>
                    {index > 0 && (
                      <button
                        className="mr-5 bg-primary text-white hover:bg-secondary py-2 px-5 rounded-lg transition-all text-sm"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    )}
                    <button
                      className="mb-3 bg-primary text-white hover:bg-secondary py-2 px-5 rounded-lg transition-all text-sm"
                      type="button"
                      onClick={() =>
                        append({
                          chamberCount: fields.length + 1,
                          chamberName: "",
                          location: "",
                          visitingPrice: "",
                          visitingHour: "",
                          mobileNumber: "",
                        })
                      }
                    >
                      Click here to add more chamber
                    </button>
                  </div>
                </div>
              ))}
              {/* ------------------------------------ chamber infos end ------------------------------------ */}

              {/* file input */}
              <div className="mb-3 flex flex-col items-start">
                <label htmlFor="photo" className="mb-2 font-medium">
                  Upload Your Photo
                  <span className="text-red-600 font-normal ml-1">*</span>
                </label>
                <input
                  id="photo"
                  type="file"
                  className="block w-full text-sm text-gray-500 file:me-4 file:py-3 file:px-5 file:rounded-tl-lg file:rounded-bl-lg file:border-0 file:text-sm file:font-poppins file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary border rounded-lg file:transition-all cursor-pointer file:cursor-pointer"
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
